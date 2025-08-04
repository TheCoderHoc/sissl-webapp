"use client";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";

import FormInput from "@/components/shared/FormInput";
import FormSelect from "@/components/shared/FormSelect";
import UploadArea from "@/components/shared/UploadArea";
import { Textarea } from "@/components/ui/textarea";
// import { Switch } from "@/components/ui/switch";
import Switch from "@/modules/event-management/components/Switch";
import AccountSetup from "@/modules/event-management/components/AccountSetup";
const CelebrationEvent = () => {
  const form = useForm();
  const [documentUrl, setDocumentUrl] = useState("");
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [enableGifts, setEnableGifts] = useState(true);
  const [enableCash, setEnableCash] = useState(true);
  const [accountDetails, setAccountDetails] = useState<{
    account_name: string;
    account_number: string;
    bank: string;
  } | null>(null);

  return (
    <>
      {" "}
      <FormProvider {...form}>
        <div className="text-white px-6 py-12 mx-auto rounded-xl">
          <h1 className="text-2xl font-semibold mb-2">Celebration event</h1>

          <form className="w-full grid grid-cols-2 gap-6 py-16 pl-11 pr-36 bg-black">
            {/* Form Fields */}
            <FormInput
              label="Event name"
              name="event_name"
              placeholder="Josh birthday"
              required
            />
            <FormSelect
              label="Event type"
              name="event_type"
              placeholder="Select event type"
              required
              options={[
                { label: "Birthday", value: "birthday" },
                { label: "Wedding", value: "wedding" },
                { label: "Burial ceremonies", value: "burial" },
              ]}
            />
            <FormInput
              label="Event date"
              name="date"
              placeholder="23 Oct -2025"
              type="date"
              required
            />
            <FormInput
              label="Event time"
              name="time"
              placeholder="10:00am"
              type="time"
              required
            />
            <FormInput
              label="Event location"
              name="location"
              placeholder="Address of event"
              required
            />
            <FormInput
              label="Number of guests"
              name="number_of_guests"
              placeholder="50"
              required
            />

            <div className="space-y-5">
              <label
                htmlFor="remarks"
                className="text-sm font-medium text-muted-foreground mb-3"
              >
                Event invitation Message
              </label>
              <Textarea id="remarks" placeholder="Enter your remarks here..." />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="banner"
                className="text-sm font-medium text-muted-foreground"
              >
                Event banner
              </label>
              <UploadArea
                shouldUploadFile
                onSetUploadUrl={(url) => setDocumentUrl(url)}
              />
            </div>
            {/* Toggle Section 1 - Gifts */}
            <div className="col-span-2 flex items-center justify-between rounded-lg px-6 py-6 border border-white/10">
              <div className="flex items-start gap-4">
                <div>
                  <p className="font-medium">
                    Want to receive gifts for this event?
                  </p>
                  <div className="flex items-center gap-4 mt-3">
                    <div className="shrink-0 flex items-center overflow-hidden">
                      <Switch checked={enableGifts} onChange={setEnableGifts} />
                    </div>

                    <p className="text-sm text-muted-foreground">
                      You activate to receive gifts for this event
                    </p>
                  </div>
                </div>
              </div>
              <button
                type="button"
                disabled={!enableGifts}
                className={`px-4 py-2 w-[150px] h-[48px] text-black rounded-lg text-sm font-medium transition ${
                  enableGifts
                    ? "bg-primary hover:bg-yellow-300"
                    : "bg-primary opacity-50 cursor-not-allowed"
                }`}
              >
                Set up gift
              </button>
            </div>

            {/* Toggle Section 2 - Cash Instead of Gifts */}
            <div className="col-span-2 flex items-center justify-between rounded-lg px-6 py-6 border border-white/10">
              <div className="flex items-start gap-4">
                <div>
                  <p className="font-medium">
                    Allow guest to send cash instead of gifts
                  </p>
                  <div className="flex items-center gap-4 mt-3 overflow-hidden">
                    <div className="shrink-0 flex items-center">
                      <Switch checked={enableCash} onChange={setEnableCash} />
                    </div>

                    <p className="text-sm text-muted-foreground">
                      You’ve chosen to receive cash instead of gifts for this
                      event
                    </p>
                  </div>
                </div>
              </div>
              <button
                type="button"
                disabled={!enableCash}
                onClick={() => setShowAccountModal(true)}
                className={`px-4 py-2 w-[150px] h-[48px] text-black rounded-lg text-sm font-medium transition ${
                  enableCash
                    ? "bg-primary hover:bg-yellow-300"
                    : "bg-primary opacity-50 cursor-not-allowed"
                }`}
              >
                Set up account
              </button>
            </div>

            {/* Action Buttons */}
            <div className="col-span-2 grid grid-cols-2 gap-6 pt-4">
              <button
                type="button"
                onClick={() => {}}
                className="h-[44px] border-[0.5px] text-white rounded hover:bg-white hover:text-black transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="h-[44px] bg-yellow-400 text-black rounded shadow hover:bg-yellow-300 transition"
              >
                Create event
              </button>
            </div>
          </form>
        </div>
      </FormProvider>
      {showAccountModal && (
        <AccountSetup
          onClose={() => setShowAccountModal(false)}
          onSave={(data) => {
            setAccountDetails(data);
            setShowAccountModal(false);
          }}
        />
      )}
    </>
  );
};

export default CelebrationEvent;
