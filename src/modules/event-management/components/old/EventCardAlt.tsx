import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EVENT_MANAGEMENT_ROUTES } from "@/constants/routes";
import Link from "next/link";
import ConfettiIconAlt from "@/public/icons/ConfettiAlt";

interface IProps {
  title: string;
  description: string;
}

export default function EventCardAlt({ title, description }: IProps) {
  return (
    <Card className="p-8 space-y-5 gap-0">
      <CardHeader className="p-0 space-y-5">
        <ConfettiIconAlt />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0 text-sm">{description}</CardContent>
      <CardFooter className="p-0">
        <Link href={`${EVENT_MANAGEMENT_ROUTES.EVENT_MANAGEMENT}/1`}>
          <Button size="lg" className="w-full bg-dash_blue text-white">
            View Event
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
