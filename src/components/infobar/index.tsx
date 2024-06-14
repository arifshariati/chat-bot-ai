import { Headphones, Star, Trash } from "lucide-react";
import BreadCrumb from "./bread-crumb";
import { Card } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const InfoBar = () => {
  return (
    <div className="flex w-full justify-between items-center py-1 mb-8 ">
      <BreadCrumb />
      <div className="flex gap-3 items-center">
        <div>
          <Card className="rounded-full flex gap-3 py-2 px-5 text-ghost">
            <Trash />
            <Star></Star>
          </Card>
        </div>
        <Avatar>
          <AvatarFallback className="bg-secondary text-primary">
            <Headphones />
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default InfoBar;
