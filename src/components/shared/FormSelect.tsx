import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface IProps extends ComponentProps<"select"> {
  label?: string;
  name: string;
  placeholder?: string;
  description?: string;
  options: { label: React.ReactNode; value: string | number }[];
  wrapperClassName?: string;
}

export default function FormSelect({
  label,
  placeholder,
  options,
  description,
  name,
  disabled,
  className,
  required,
  wrapperClassName,
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
            {required && <span className="font-bold text-red-500">*</span>}
          </FormLabel>
          <FormControl>
            <Select
              disabled={disabled}
              onValueChange={field.onChange}
              value={field.value}
              defaultValue={field.value}
            >
              <SelectTrigger className={cn("w-full h-12", className)}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>

              <SelectContent>
                {options?.map(({ label, value }) => (
                  <SelectItem key={value} value={String(value)}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormDescription className="font-light text-gray-500 text-[12px]">
            {description}
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
