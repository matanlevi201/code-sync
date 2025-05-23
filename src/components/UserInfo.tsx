import React from "react";
import { Doc } from "../../convex/_generated/dataModel";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { UserCircle2Icon } from "lucide-react";

type User = Doc<"users">;

function UserInfo({ user }: { user: User }) {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="h-6 w-6">
        <AvatarImage src={user.image} />
        <AvatarFallback>
          <UserCircle2Icon className="h-4 w-4" />
        </AvatarFallback>
      </Avatar>
      <span>{user.name}</span>
    </div>
  );
}

export default UserInfo;
