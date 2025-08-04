"use client";

import { useEffect, useMemo, useState } from "react";
import DashboardItem from "./DashboardItem";
import ThresholdModal from "./ThresholdModal";
import LivenessActionsModal from "./LivenessActionModal";
import DurationModal from "./LivenessDurationModal";
import { useLivenessSettings } from "../controllers/usePatchLivenessSettingController";
import { LivenessSettingRequest } from "../models/livenessSettings";
import useGetLivenessAction from "../controllers/useGetLivenessActionController";
import useGetLivenessSetting from "../controllers/useGetLivenessSettingController";

const mapThresholdToNumber = (level: "low" | "medium" | "high"): number => {
    switch (level) {
        case "low":
            return 1;
        case "medium":
            return 2;
        case "high":
            return 3;
        default:
            return 1;
    }
};

const mapNumberToThreshold = (num: number): "low" | "medium" | "high" => {
    switch (num) {
        case 1:
            return "low";
        case 2:
            return "medium";
        case 3:
            return "high";
        default:
            return "low";
    }
};

export default function LiveSettingTab() {
    const { livenessSettings } = useLivenessSettings();
    const {
        data: actionData,
        isLoading: loadingActions,
        isError,
    } = useGetLivenessAction();
    const { data: settingData, isLoading: loadingSettings } =
        useGetLivenessSetting();

    const [threshold, setThreshold] = useState<"low" | "medium" | "high">(
        "low"
    );
    const [randomize, setRandomize] = useState(false);
    const [actions, setActions] = useState<string[]>([]);
    const [durations, setDurations] = useState<Record<string, number>>({});

    const [showThresholdModal, setShowThresholdModal] = useState(false);
    const [showActionsModal, setShowActionsModal] = useState(false);
    const [showDurationModal, setShowDurationModal] = useState(false);
    const [initialized, setInitialized] = useState(false);

    const actionList = Array.isArray(actionData)
        ? actionData.filter(
              (a): a is { id: string; name: string } =>
                  typeof a.id === "string" && typeof a.name === "string"
          )
        : [];

    const idToName = new Map(actionList.map((a) => [a.id, a.name]));
    const nameToId = new Map(actionList.map((a) => [a.name, a.id]));

    useEffect(() => {
        if (!initialized && settingData?.data && actionList.length > 0) {
            const payload = settingData.data;

            setThreshold(mapNumberToThreshold(payload.thresh_hold));
            setRandomize(payload.randomize_action ?? false);

            const actionIds =
                payload.action
                    ?.split(",")
                    .map((name) => name.trim())
                    .map((name) => nameToId.get(name) || name) ?? [];

            setActions(actionIds);

            const newDurations: Record<string, number> = {};
            payload.action_durations?.forEach(
                ({ action_type_id, duration_secs }) => {
                    newDurations[action_type_id] = duration_secs;
                }
            );
            setDurations(newDurations);

            setInitialized(true);
        }
    }, [settingData?.data, actionList, initialized]);

    const buildPayload = (
        partial: Partial<LivenessSettingRequest>
    ): LivenessSettingRequest => ({
        thresh_hold: mapThresholdToNumber(threshold),
        action: actions.map((id) => idToName.get(id) || id).join(", "),
        randomize_action: randomize,
        action_durations: Object.entries(durations).map(
            ([action_type_id, duration_secs]) => ({
                action_type_id,
                duration_secs,
            })
        ),
        ...partial,
    });

    if (loadingActions || loadingSettings) {
        return (
            <div className="flex items-center justify-center h-40">
                <p className="text-white">Loading liveness settings...</p>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="flex items-center justify-center h-40">
                <p className="text-red-400">
                    Failed to load liveness actions. Please try again.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-10">
            <h2 className="text-lg font-medium">Liveness Check Settings</h2>

            <div className="space-y-20">
                <DashboardItem
                    title="Liveness Threshold"
                    description={
                        <span className="flex items-center gap-5">
                            <span className="text-gray-500 capitalize">
                                {threshold}
                            </span>
                            <span
                                className={`block w-14 h-7 rounded-xl ${
                                    threshold === "low"
                                        ? "bg-green-500"
                                        : threshold === "medium"
                                        ? "bg-red-500"
                                        : "bg-blue-500"
                                }`}
                            ></span>
                        </span>
                    }
                    onChange={() => setShowThresholdModal(true)}
                />

                <DashboardItem
                    title="Liveness Action"
                    description={actions
                        .map((id) => idToName.get(id) || id)
                        .join(", ")}
                    onChange={() => setShowActionsModal(true)}
                />

                <DashboardItem
                    title="Randomize Action"
                    description={randomize ? "YES" : "NO"}
                    actionType="switch"
                    checked={randomize}
                    onChange={async () => {
                        const updated = !randomize;
                        setRandomize(updated);
                        await livenessSettings(
                            buildPayload({ randomize_action: updated })
                        );
                    }}
                />

                <DashboardItem
                    title="Duration for each action"
                    description={
                        <ul className="space-y-2 text-gray-500">
                            {actions.map((id) => (
                                <li key={id}>
                                    {idToName.get(id) || id}{" "}
                                    {durations[id] ?? 0} secs
                                </li>
                            ))}
                        </ul>
                    }
                    onChange={() => setShowDurationModal(true)}
                />
            </div>

            <ThresholdModal
                open={showThresholdModal}
                onClose={() => setShowThresholdModal(false)}
                value={threshold}
                onSave={async (val) => {
                    setThreshold(val);
                    setShowThresholdModal(false);
                    await livenessSettings(
                        buildPayload({ thresh_hold: mapThresholdToNumber(val) })
                    );
                }}
            />

            <LivenessActionsModal
                open={showActionsModal}
                onClose={() => setShowActionsModal(false)}
                value={actions.map((id) => idToName.get(id) || id)}
                onSave={async (newIds) => {
                    setActions(newIds);

                    const updatedDurations: Record<string, number> = {};
                    newIds.forEach((id) => {
                        updatedDurations[id] = durations[id] ?? 0;
                    });

                    setDurations(updatedDurations);
                    setShowActionsModal(false);

                    await livenessSettings(
                        buildPayload({
                            action: newIds
                                .map((id) => idToName.get(id) || id)
                                .join(", "), // <-- fix here
                            action_durations: Object.entries(
                                updatedDurations
                            ).map(([action_type_id, duration_secs]) => ({
                                action_type_id,
                                duration_secs,
                            })),
                        })
                    );
                }}
            />

            <DurationModal
                open={showDurationModal}
                onClose={() => setShowDurationModal(false)}
                value={durations}
                actions={actions}
                idToName={idToName}
                onSave={async (updated) => {
                    setDurations(updated);
                    setShowDurationModal(false);

                    await livenessSettings(
                        buildPayload({
                            action_durations: Object.entries(updated).map(
                                ([action_type_id, duration_secs]) => ({
                                    action_type_id,
                                    duration_secs,
                                })
                            ),
                        })
                    );
                }}
            />
        </div>
    );
}
