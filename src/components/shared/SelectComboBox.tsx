import { Checkbox } from "../ui/checkbox";
import { Switch } from "../ui/switch";

interface IProps {
    type: "switch" | "checkbox";
    fields: { label: string; name: string }[];
}

export default function SelectComboBox({ type, fields = [] }: IProps) {
    return (
        <div className="py-8 px-5 bg-gray-700 col-span-2 rounded-lg flex flex-col gap-5">
            <div className="w-fit mx-auto space-y-7">
                {fields.map(({ label, name }) => {
                    return (
                        <div
                            key={name}
                            className="flex items-center justify-between gap-40"
                        >
                            <h4>{label}</h4>
                            {type === "checkbox" ? (
                                <Checkbox name={name} />
                            ) : (
                                <Switch />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
