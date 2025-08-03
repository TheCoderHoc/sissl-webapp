import { Button } from "../ui/button";

interface IProps {
    onDraft?: () => void;
    onCancel?: () => void;
    onOk?: () => void;
    draftText?: string;
    cancelText?: string;
    okText?: string;
}

export default function SubmitButtonGroup({
    draftText,
    cancelText,
    okText,
    onDraft,
    onCancel,
    onOk,
}: IProps) {
    const showDraft = Boolean(onDraft);

    return (
        <footer
            className={`${
                showDraft ? "flex justify-between" : ""
            } col-span-2 mb-10`}
        >
            {showDraft && (
                <Button size="lg" variant="outline">
                    {draftText}
                </Button>
            )}

            <div
                className={!showDraft ? "grid grid-cols-2 gap-5" : "space-x-5"}
            >
                <Button size="lg" variant="outline" onClick={onCancel}>
                    {cancelText}
                </Button>

                <Button
                    size="lg"
                    className="bg-dash_blue text-white"
                    onClick={onOk}
                >
                    {okText}
                </Button>
            </div>
        </footer>
    );
}
