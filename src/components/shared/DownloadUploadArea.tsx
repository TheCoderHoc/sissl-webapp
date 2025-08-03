import { useEffect } from "react";
import { Download } from "lucide-react";
import { Card } from "../ui/card";
import { cn } from "@/utils/cn";

export interface IProps {
  label?: string;
  className?: string;
  downloadQuery: {
    data: unknown;
    refetch: () => void;
    isFetching: boolean;
  };
  description?: string;
  filename?: string; // 👈 New prop added
}

function DownloadArea({
  className,
  label = "Download Template",
  downloadQuery,
  description = "Click to download template file",
  filename = "staff_template.csv",
}: IProps) {
  const { data, refetch, isFetching } = downloadQuery;

  useEffect(() => {
    if (data instanceof Blob) {
      const url = URL.createObjectURL(data);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  }, [data, filename]);

  const handleDownload = () => {
    if (!isFetching) refetch();
  };

  return (
    <div className={cn("space-y-5", className)}>
      <h3>{label}</h3>
      <Card
        onClick={handleDownload}
        className="min-h-[250px] text-gray-500 bg-gray-700 dark:bg-dash_black relative cursor-pointer"
      >
        <div className="flex flex-col items-center justify-center absolute inset-0 w-full h-full gap-2 text-center px-4">
          <Download size={20} />
          <h3 className="text-dash_blue font-light">
            {isFetching ? "Downloading..." : "Click to download"}
          </h3>
          <p>{description}</p>
        </div>
      </Card>
    </div>
  );
}

export { DownloadArea };
