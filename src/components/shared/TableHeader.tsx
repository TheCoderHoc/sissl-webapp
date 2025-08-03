import { Filter } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Select, SelectTrigger } from "../ui/select";

interface IProps {
    searchPlaceholder?: string;
}

export default function TableHeader({
    searchPlaceholder = "Search here",
}: IProps) {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <Input placeholder={searchPlaceholder} />
                <Button className="bg-[#F5E9001A] text-primary h-12">
                    <Filter />
                    Filter
                </Button>
            </div>

            <div className="flex items-center gap-2">
                <span>Show</span>
                <Select>
                    <SelectTrigger>100</SelectTrigger>
                </Select>
                <span>Entries</span>
            </div>
        </div>
    );
}
