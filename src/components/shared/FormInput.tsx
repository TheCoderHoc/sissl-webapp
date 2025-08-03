import { useFormContext } from "react-hook-form";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

interface IProps extends React.ComponentProps<"input"> {
    label?: string;
    description?: string;
    wrapperClassName?: string;
}

export default function FormInput({
    description,
    label,
    name,
    type,
    required,
    wrapperClassName,
    ...rest
}: IProps) {
    const form = useFormContext();

    return (
        <FormField
            control={form.control}
            name={name ?? ""}
            render={({ field }) => (
                <FormItem className={wrapperClassName}>
                    <FormLabel>
                        {label}{" "}
                        {required && (
                            <span className="font-bold text-red-500">*</span>
                        )}
                    </FormLabel>
                    <FormControl>
                        <Input
                            type={type}
                            {...rest}
                            {...field}
                            className="border-[#FFFFFF1A] border-[1px] border-solid"
                            value={field.value ?? ""}
                        />
                    </FormControl>
                    <FormDescription>{description}</FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
