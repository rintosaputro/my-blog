import React from "react";
import UserItem from "./UserItem";
import { User } from "@/types";

const UsersList = ({ users }: { users: User[] }) => {
  if (!users.length) {
    return <p className="mt-8 text-center text-[#5c5c5c]">User not found</p>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-7 mt-8">
      {users.map((user) => (
        <UserItem user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UsersList;
