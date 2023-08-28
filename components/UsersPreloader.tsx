"use client";

import { store } from "@/store";
import { getUsers } from "@/store/usersSlice";
import { User } from "@/types";
import { useRef } from "react";

const UsersPreloader = ({ users }: { users: User[] }) => {
  const ref = useRef(false);

  if (!ref.current) {
    store.dispatch(getUsers(users));
    ref.current = true;
  }
  return null;
};

export default UsersPreloader;
