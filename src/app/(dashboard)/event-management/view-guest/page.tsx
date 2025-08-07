import LabeledRow from "@/modules/document-verification/components/LabelRow";
import { Button } from "@/components/ui/button";
import { qr_code } from "@/public/images";

const ViewGuest = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 text-white">
      <div className="bg-black rounded-md py-5 px-6 mb-6">
        <p className="text-sm opacity-60 mb-1">Account owner</p>
        <h1 className="text-2xl font-medium">David Adebayo</h1>
      </div>

      <div className="flex justify-between w-[80%] px-12">
        <div className="">
          <p>Guest Data</p>
          <LabeledRow
            label="Guest name"
            value="Adebayo David"
            className="border-none  "
          />
          <LabeledRow
            label="Phone Number"
            value="1234567890"
            className="py-4"
          />
          <LabeledRow
            label="Email Address"
            value="davig@yahoo.com"
            className="py-4"
          />
          <LabeledRow
            label="Guest gift"
            value="Iphone 7"
            className="py-4 border-none"
          />
        </div>
        <div className=" w-[50%] ">
          <p className="text-green-600 mb-8">Access pass</p>
          <div className="bg-black flex flex-col justify-center items-center px-4 ">
            <img className="w-[55%] py-20" src={qr_code.src} alt="" />
            <div className="flex w-full justify-around py-5">
              <Button className="w-[45%] h-[48px] bg-red-500 ">Decline</Button>
              <Button className="w-[45%] h-[48px] bg-green-600 ">
                Approve
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewGuest;
