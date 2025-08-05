"use client";
import FormInput from "@/components/shared/FormInput";
import FormSelect from "@/components/shared/FormSelect";
import UploadArea from "@/components/shared/UploadArea";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import TicketSetup from "@/modules/event-management/components/TicketSetup";
import AccountSetup from "@/modules/event-management/components/old/AccountSetup";
import Ticket from "@/modules/event-management/components/Ticket";

const TicketBaseEvent = () => {
  const form = useForm();
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [tickets, setTickets] = useState<any[]>([]);
  const [accountDetails, setAccountDetails] = useState<{
    account_name: string;
    account_number: string;
    bank: string;
  } | null>(null);

  const [documentUrl, setDocumentUrl] = useState("");

  return (
    <>
      {" "}
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
              <Textarea id="remarks" placeholder="Enter event details" />
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
                onSetUploadUrl={(url) => setDocumentUrl(url)}
              />
            </div>

            {/* Ticket Sections */}
            <div className="col-span-2 flex flex-col gap-6">
              {/* Ticket base */}
              {/* <div className="flex justify-between items-center border border-[#1e1e1e] rounded-xl px-6 py-6">
                <div>
                  <h3 className="text-white font-medium text-base mb-1">
                    Ticket base
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Customize ticket types for your event
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowTicketModal(true)}
                  className="bg-primary hover:bg-yellow-300 text-black  py-2 px-4 rounded-lg"
                >
                  Set up ticket
                </button>
              </div> */}

              {tickets.length === 0 ? (
                <div className="flex justify-between items-center border border-[#1e1e1e] rounded-xl px-6 py-6">
                  <div>
                    <h3 className="text-white font-medium text-base mb-1">
                      Ticket base
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Customize ticket types for your event
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowTicketModal(true)}
                    className="bg-primary hover:bg-yellow-300 text-black py-2 px-4 rounded-lg"
                  >
                    Set up ticket
                  </button>
                </div>
              ) : (
                <div className="border border-[#1e1e1e] rounded-xl px-6 py-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-white font-medium text-base">
                      Ticket base
                    </h3>
                    <button
                      type="button"
                      onClick={() => setShowTicketModal(true)}
                      className="bg-primary hover:bg-yellow-300 text-black py-2 px-4 rounded-lg"
                    >
                      Add ticket
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {tickets.map((ticket, index) => (
                      <Ticket key={index} ticket={ticket} />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-xs mt-3">
                    Click any of the ticket to edit ticket
                  </p>
                </div>
              )}

              {/* Ticket account details */}
              {/* <div className="flex justify-between items-center  border border-[#1e1e1e] rounded-xl px-6 py-6">
                <div>
                  <h3 className="text-white font-medium text-base mb-1">
                    Ticket account details
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Set up account details for this ticket-based event
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowAccountModal(true)}
                  className="bg-primary hover:bg-yellow-300 text-black  py-2 px-4 rounded-lg"
                >
                  Set up account
                </button>
              </div> */}
              {!accountDetails ? (
                <div className="flex justify-between items-center border border-[#1e1e1e] rounded-xl px-6 py-6">
                  <div>
                    <h3 className="text-white font-medium text-base mb-1">
                      Ticket account details
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Set up account details for this ticket-based event
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowAccountModal(true)}
                    className="bg-primary hover:bg-yellow-300 text-black py-2 px-4 rounded-lg"
                  >
                    Set up account
                  </button>
                </div>
              ) : (
                <div className="border border-[#1e1e1e] rounded-xl px-6 py-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-white font-medium text-base">
                      Ticket payment details
                    </h3>
                    <button
                      type="button"
                      onClick={() => setShowAccountModal(true)}
                      className="bg-primary hover:bg-yellow-300 text-black py-2 px-4 rounded-lg"
                    >
                      Edit details
                    </button>
                  </div>
                  <div className="w-[40%]">
                    <div className="grid grid-cols-3 text-sm text-muted-foreground mb-1">
                      <p>Account name</p>
                      <p>Account number</p>
                      <p>Bank</p>
                    </div>
                    <div className="grid grid-cols-3 text-white text-sm font-medium">
                      <p>{accountDetails.account_name}</p>
                      <p>{accountDetails.account_number}</p>
                      <p>{accountDetails.bank}</p>
                    </div>
                  </div>
                </div>
              )}
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
      {/* {showTicketModal && (
        <TicketSetup onClose={() => setShowTicketModal(false)} />
      )} */}
      {showTicketModal && (
        <TicketSetup
          onClose={() => setShowTicketModal(false)}
          onTicketCreate={(ticket: any) => {
            setTickets((prev) => [...prev, ticket]);
            setShowTicketModal(false);
          }}
        />
      )}
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
export default TicketBaseEvent;
