import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export const modalWidth = {
    sm: "w-[320px] max-w-full",
    md: "w-[480px] max-w-full",
    lg: "w-[640px] max-w-full",
    xl: "w-[768px] max-w-full",
};

export interface IModalProps {
    children: React.ReactNode;
    className?: string;
    description?: string;
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    width: keyof typeof modalWidth;
}

export default function Modal({
    isOpen,
    onClose,
    title,
    description,
    width,
    children,
    className,
}: IModalProps) {
    return (
        <Dialog
            open={isOpen}
            onOpenChange={(open) => {
                if (!open) {
                    onClose();
                }
            }}
        >
            <DialogContent
                className={cn(
                    "top-10 translate-y-0 max-w-none overflow-y-scroll h-[600px] gap-3 block scrollbar-hide bg-black text-foreground border-none",
                    modalWidth[width],
                    className
                )}
            >
                <DialogHeader className="mt-5 block">
                    <DialogTitle className="font-bold text-2xl text-center text-foreground">
                        {title || ""}
                    </DialogTitle>

                    {description && (
                        <DialogDescription className="text-center text-gray-200 font-light">
                            {description}
                        </DialogDescription>
                    )}
                </DialogHeader>

                {children}
            </DialogContent>
        </Dialog>
    );
}

// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle,
// } from "@/components/ui/dialog";
// import { cn } from "@/lib/utils";
// import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

// export const modalWidth = {
//     sm: "w-[320px] max-w-full",
//     md: "w-[480px] max-w-full",
//     lg: "w-[640px] max-w-full",
//     xl: "w-[768px] max-w-full",
// };

// export interface IModalProps {
//     children: React.ReactNode;
//     className?: string;
//     description?: string;
//     isOpen: boolean;
//     onClose: () => void;
//     title: string;
//     width: keyof typeof modalWidth;
// }

// export default function Modal({
//     isOpen,
//     onClose,
//     title,
//     description,
//     width,
//     children,
//     className,
// }: IModalProps) {
//     return (
//         <Dialog
//             open={isOpen}
//             onOpenChange={(open) => {
//                 if (!open) {
//                     onClose();
//                 }
//             }}
//         >
//             <DialogContent
//                 className={cn(
//                     "top-10 translate-y-0 max-w-none overflow-y-scroll h-[600px] gap-3 block",
//                     modalWidth[width],
//                     className
//                 )}
//             >
//                 <DialogHeader className="mt-5 block">
//                     <VisuallyHidden>
//                         <DialogTitle className="font-bold text-2xl text-center">
//                             {title}
//                         </DialogTitle>
//                     </VisuallyHidden>

//                     {description && (
//                         <DialogDescription className="text-center text-gray-500 font-light">
//                             {description}
//                         </DialogDescription>
//                     )}
//                 </DialogHeader>

//                 {children}
//             </DialogContent>
//         </Dialog>
//     );
// }
