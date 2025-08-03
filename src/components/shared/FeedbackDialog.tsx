import LoadingSpinner from "../../../public/icons/LoadingSpinner";
import QuestionMarkIcon from "../../../public/icons/Question";
import SuccessIcon from "../../../public/icons/Success";
import Modal, { IModalProps } from "./Modal";
import SubmitButtonGroup from "./SubmitButtonGroup";
import { ReactNode } from "react";

type DialogVariant = "primary" | "success" | "destructive";

interface FeedbackDialogProps extends Omit<IModalProps, "children" | "width"> {
    cancelText?: string;
    okText?: string;
    icon?: React.ReactNode;
    interactable?: boolean;
    footer?: ReactNode;
    isLoading?: boolean;
    loadingText?: string;
    isSuccess?: boolean;
    successText?: string;
    successComponent?: ReactNode;
    onOk?: () => void;
    variant?: DialogVariant;
}

function Loader({ loadingText }: { loadingText?: string }) {
    return (
        <div className="flex flex-col items-center justify-center gap-5">
            <LoadingSpinner />
            {loadingText && (
                <h3 className="text-2xl font-bold">{loadingText}</h3>
            )}
        </div>
    );
}

function SuccessState({
    successText,
    successComponent,
}: {
    successText?: string;
    successComponent?: ReactNode;
}) {
    return (
        <>
            <div className="flex justify-center">
                <SuccessIcon />
            </div>
            {successText && (
                <h3 className="text-2xl font-bold">{successText}</h3>
            )}
            {successComponent && <div>{successComponent}</div>}
        </>
    );
}

function getIconByVariant(variant: DialogVariant) {
    switch (variant) {
        case "primary":
            return <QuestionMarkIcon />;
        case "success":
            return <SuccessIcon />;
        default:
            return null;
    }
}

export default function FeedbackDialog({
    isOpen,
    onClose,
    title,
    description,
    variant = "primary",
    cancelText = "Cancel",
    okText = "Continue",
    interactable = true,
    isLoading = false,
    loadingText,
    isSuccess = false,
    successText,
    successComponent,
    onOk,
    footer,
}: FeedbackDialogProps) {
    return (
        <Modal
            width="sm"
            title=""
            className="h-max top-24 overflow-y-auto"
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="space-y-8 text-center">
                {isLoading ? (
                    <Loader loadingText={loadingText} />
                ) : isSuccess ? (
                    <SuccessState
                        successText={successText}
                        successComponent={successComponent}
                    />
                ) : (
                    <>
                        <div className="flex flex-col items-center gap-2 justify-center">
                            {getIconByVariant(variant)}

                            {title && (
                                <h3 className="font-thin text-[16px]">
                                    {title}
                                </h3>
                            )}
                        </div>

                        {description && (
                            <p className="font-thin text-gray-400">
                                {description}
                            </p>
                        )}

                        {interactable && footer ? (
                            footer
                        ) : (
                            <SubmitButtonGroup
                                cancelText={cancelText}
                                okText={okText}
                                onCancel={onClose}
                                onOk={onOk}
                            />
                        )}
                    </>
                )}
            </div>
        </Modal>
    );
}
