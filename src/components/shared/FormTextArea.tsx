import { useFormContext } from "react-hook-form";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea"; // import the shadcn Textarea

interface IProps extends React.ComponentProps<"textarea"> {
    label?: string;
    description?: string;
    wrapperClassName?: string;
}

export default function FormTextarea({
    description,
    label,
    name,
    required,
    wrapperClassName,
    ...rest
}: IProps) {
    const form = useFormContext();
    console.log({required})

    return (
        <FormField
            control={form.control}
            name={name ?? ""}
            render={({ field }) => (
                <FormItem className={wrapperClassName}>
                    {label && <FormLabel>{label}</FormLabel>}
                    <FormControl>
                        <Textarea {...rest} {...field} className="" />
                    </FormControl>
                    {description && (
                        <FormDescription>{description}</FormDescription>
                    )}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
