"use client";
import FormInput from "@/components/shared/FormInput";
import FormSelect from "@/components/shared/FormSelect";
import UploadArea from "@/components/shared/UploadArea";
import { Textarea } from "@/components/ui/textarea";
import { useForm, FormProvider } from "react-hook-form";

const HeadCountEvent = () => {
  const form = useForm();
  // const [documentUrl, setDocumentUrl] = useState("");

  return (
    <FormProvider {...form}>
      <div className="text-white px-6 py-12 mx-auto rounded-xl">
        <h1 className="text-2xl font-semibold mb-2">Celebration event</h1>

        <form className="w-full grid grid-cols-2 gap-6 py-16 pl-11 pr-36 bg-black">
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
              htmlFor="remarks"
              className="text-sm font-medium text-muted-foreground"
            >
              Event banner
            </label>
            <UploadArea
              shouldUploadFile
              // onSetUploadUrl={(url) => setDocumentUrl(url)}
            />
          </div>
          {/* Action Buttons */}
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={() => {}}
              className="w-full h-[44px] border-[0.5px] text-white rounded hover:bg-white hover:text-black transition"
            >
              Cancel
            </button>
          </div>
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="submit"
              className="w-full h-[44px] bg-yellow-400 text-black rounded shadow hover:bg-yellow-300 transition"
            >
              Create event
            </button>
          </div>
        </form>
      </div>
    </FormProvider>
  );
};
export default HeadCountEvent;
