import { UploadIcon } from "lucide-react";
import { Card } from "../ui/card";
import { cn } from "@/utils/cn";
import { Controller, useFormContext } from "react-hook-form";
import { Skeleton } from "../ui/skeleton";
import useFileUploadController from "@/constants/controllers/fileUploadController";
import { useCallback, useEffect, useRef, useState } from "react";

export interface IProps extends React.ComponentProps<"input"> {
    label?: string;
    name?: string;
    isLoading?: boolean;
    shouldUploadFile?: boolean;
    onSetUploadUrl?: (url: string) => void;
}

export default function UploadArea({
    accept,
    className,
    label,
    multiple = false,
    name,
    onChange,
    isLoading,
    shouldUploadFile = false,
    onSetUploadUrl,
}: IProps) {
    const form = useFormContext();
    const isUsingForm = !!(form && name);
    const inputId =
        name ||
        label?.toLowerCase().replace(/\s+/g, "-") ||
        `upload-${Math.random().toString(36).substring(2)}`;

    const [localFiles, setLocalFiles] = useState<FileList | null>(null);
    const hasUploadedRef = useRef(false);

    const renderFileNames = (files: FileList | null) =>
        files
            ? Array.from(files)
                  .map((f) => f.name)
                  .join(", ")
            : "";

    const { uploadFile: uploadFileController, isLoading: isUploadLoading } =
        useFileUploadController();

    const uploadFile = useCallback(async () => {
        if (!shouldUploadFile || !localFiles?.[0] || hasUploadedRef.current) {
            return;
        }

        hasUploadedRef.current = true;

        const formData = new FormData();
        formData.append("file", localFiles[0]);

        const response = await uploadFileController(formData);
        if (response && onSetUploadUrl) {
            onSetUploadUrl(response.url);
        }
    }, [shouldUploadFile, localFiles, onSetUploadUrl]);

    useEffect(() => {
        uploadFile();
    }, [uploadFile]);

    useEffect(() => {
        hasUploadedRef.current = false;
    }, [localFiles]);

    const renderUI = ({
        inputId,
        files,
        error,
        onInputChange,
    }: {
        inputId: string;
        files: FileList | null;
        error?: string;
        onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }) => {
        return (
            <Card className="min-h-[250px] text-gray-400 bg-gray-900 relative">
                {isLoading || isUploadLoading ? (
                    <Skeleton className="w-full min-h-[250px] flex items-center justify-center text-lg font-thin">
                        Uploading File...
                    </Skeleton>
                ) : (
                    <>
                        <label
                            htmlFor={inputId}
                            className="flex flex-col items-center justify-center absolute left-0 right-0 top-0 bottom-0 w-full h-full cursor-pointer gap-2"
                        >
                            <UploadIcon size={20} className="stroke-main" />
                            <h3>
                                <span className="text-main font-light">
                                    Click to upload
                                </span>{" "}
                                or Drag & Drop
                            </h3>
                            <p>jpg, png, pdf less than 5MB</p>
                            <p>
                                Please ensure your document contains important
                                info
                            </p>
                        </label>

                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                            <p className="font-bold">
                                {renderFileNames(files)}
                            </p>
                            {error && (
                                <p className="text-red-500 font-thin">
                                    {error}
                                </p>
                            )}
                        </div>

                        <input
                            type="file"
                            id={inputId}
                            className="hidden"
                            multiple={multiple}
                            accept={accept}
                            onChange={onInputChange}
                        />
                    </>
                )}
            </Card>
        );
    };

    return (
        <div className={cn("space-y-5", className)}>
            <h3>{label}</h3>

            {isUsingForm ? (
                <Controller
                    control={form.control}
                    name={name!}
                    render={({ field, fieldState }) =>
                        renderUI({
                            inputId: name!,
                            files: field.value,
                            error: fieldState.error?.message,
                            onInputChange: (e) => {
                                if (e.target.files) {
                                    field.onChange(e.target.files);
                                }
                            },
                        })
                    }
                />
            ) : (
                renderUI({
                    inputId,
                    files: localFiles,
                    onInputChange: (e) => {
                        if (onChange && e.target.files) {
                            onChange(e);
                        }
                        setLocalFiles(e.target.files);
                    },
                })
            )}
        </div>
    );
}
