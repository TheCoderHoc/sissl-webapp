// // "use client";

// // import * as Dialog from "@radix-ui/react-dialog";
// // import { Button } from "@/components/ui/button";
// // import { IAPIKey } from "../columns/api-key-columns";
// // import { X } from "lucide-react";

// // interface DeleteApiKeyModalProps {
// //     open: boolean;
// //     onClose: () => void;
// //     apiKey: IAPIKey;
// //     onConfirm: (apiKey: IAPIKey) => void;
// // }

// // export default function DeleteApiKeyModal({
// //     open,
// //     onClose,
// //     apiKey,
// //     onConfirm,
// // }: DeleteApiKeyModalProps) {
// //     //   const maskedKey = `${apiKey.key.slice(0, 8)}*****`;

// //     return (
// //         <Dialog.Root open={open} onOpenChange={onClose}>
// //             <Dialog.Portal>
// //                 <Dialog.Overlay className="fixed inset-0 bg-black/70 z-40" />
// //                 <Dialog.Content className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white rounded-xl shadow-lg p-6 w-[400px] space-y-6 border border-white/10">
// //                     <div className="flex justify-end">
// //                         <Dialog.Close asChild>
// //                             <button className="text-gray-400 hover:text-white">
// //                                 <X className="w-5 h-5" />
// //                             </button>
// //                         </Dialog.Close>
// //                     </div>

// //                     <div className="flex flex-col items-center space-y-4">
// //                         <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
// //                             <span className="text-2xl">?</span>
// //                         </div>
// //                         <p className="text-center text-sm">
// //                             Are you sure you want to
// //                             <br />
// //                             <span className="text-red-500 font-semibold">
// //                                 delete this
// //                             </span>{" "}
// //                             key
// //                         </p>
// //                     </div>

// //                     <div className="flex justify-between gap-4 pt-2">
// //                         <Button
// //                             variant="outline"
// //                             className="w-full border-gray-600 text-white hover:bg-gray-800"
// //                             onClick={onClose}
// //                         >
// //                             No
// //                         </Button>
// //                         <Button
// //                             className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
// //                             onClick={() => onConfirm(apiKey)}
// //                         >
// //                             Yes
// //                         </Button>
// //                     </div>
// //                 </Dialog.Content>
// //             </Dialog.Portal>
// //         </Dialog.Root>
// //     );
// // }

// "use client";

// import * as Dialog from "@radix-ui/react-dialog";
// import { Button } from "@/components/ui/button";
// import { IAPIKey } from "../columns/api-key-columns";
// import { X } from "lucide-react";

// interface DeleteApiKeyModalProps {
//   open: boolean;
//   onClose: () => void;
//   apiKey: IAPIKey;
//   onConfirm: (apiKey: IAPIKey) => void;
//   loading?: boolean;
//   errorMsg?: string;
// }

// export default function DeleteApiKeyModal({
//   open,
//   onClose,
//   apiKey,
//   onConfirm,
//   loading = false,
//   errorMsg,
// }: DeleteApiKeyModalProps) {
//   const maskedKey = `${apiKey.key.slice(0, 8)}*****`;

//   return (
//     <Dialog.Root open={open} onOpenChange={onClose}>
//       <Dialog.Portal>
//         <Dialog.Overlay className="fixed inset-0 bg-black/70 z-40" />
//         <Dialog.Content className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white rounded-xl shadow-lg p-6 w-[400px] space-y-6 border border-white/10">
//           <div className="flex justify-end">
//             <Dialog.Close asChild>
//               <button
//                 className="text-gray-400 hover:text-white"
//                 disabled={loading}
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             </Dialog.Close>
//           </div>

//           <div className="flex flex-col items-center space-y-4">
//             <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
//               <span className="text-2xl">?</span>
//             </div>
//             <p className="text-center text-sm">
//               Are you sure you want to{" "}
//               <span className="text-red-500 font-semibold">delete</span> the
//               following API key?
//               <br />
//               <span className="text-yellow-400 break-all">{maskedKey}</span>
//             </p>
//             {errorMsg && (
//               <p className="text-xs text-red-500 text-center">{errorMsg}</p>
//             )}
//           </div>

//           <div className="flex justify-between gap-4 pt-2">
//             <Button
//               variant="outline"
//               className="w-full border-gray-600 text-white hover:bg-gray-800"
//               onClick={onClose}
//               disabled={loading}
//             >
//               No
//             </Button>
//             <Button
//               className="w-full bg-yellow-400 text-black hover:bg-yellow-500 disabled:opacity-50"
//               onClick={() => onConfirm(apiKey)}
//               disabled={loading}
//             >
//               {loading ? "Deleting..." : "Yes"}
//             </Button>
//           </div>
//         </Dialog.Content>
//       </Dialog.Portal>
//     </Dialog.Root>
//   );
// }

"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button } from "@/components/ui/button";
import { IAPIKey } from "../columns/api-key-columns";
import { X } from "lucide-react";
import { useState } from "react";

interface DeleteApiKeyModalProps {
  open: boolean;
  onClose: () => void;
  apiKey: IAPIKey;
  onConfirm: (apiKey: IAPIKey) => Promise<void> | void; // can handle async
}

export default function DeleteApiKeyModal({
  open,
  onClose,
  apiKey,
  onConfirm,
}: DeleteApiKeyModalProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleConfirm = async () => {
    try {
      setIsDeleting(true);
      await onConfirm(apiKey); // waits if async
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 z-40" />
        <Dialog.Content
          className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white rounded-xl shadow-lg p-6 w-[400px] space-y-6 border border-white/10"
        >
          {/* Accessible title */}
          <VisuallyHidden>
            <Dialog.Title>Confirm API Key Deletion</Dialog.Title>
          </VisuallyHidden>

          {/* Accessible description */}
          <VisuallyHidden>
            <Dialog.Description>
              This action will permanently delete the selected API key. It cannot be undone.
            </Dialog.Description>
          </VisuallyHidden>

          <div className="flex justify-end">
            <Dialog.Close asChild>
              <button className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </Dialog.Close>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-2xl">?</span>
            </div>
            <p className="text-center text-sm">
              Are you sure you want to
              <br />
              <span className="text-red-500 font-semibold">delete this</span> key?
            </p>
          </div>

          <div className="flex justify-between gap-4 pt-2">
            <Button
              variant="outline"
              className="w-full border-gray-600 text-white hover:bg-gray-800"
              onClick={onClose}
              disabled={isDeleting}
            >
              No
            </Button>
            <Button
              className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
              onClick={handleConfirm}
              disabled={isDeleting}
            >
              {isDeleting ? "Deleting..." : "Yes"}
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
