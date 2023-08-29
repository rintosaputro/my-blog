import ModalUpdate from "@/components/ModalUpdateUser";
import UsersPreloader from "@/components/UsersPreloader";
import UsersSearch from "@/components/UsersSearch";
import { store } from "@/store";
import { getUsers, getUsersApi } from "@/store/usersSlice";
import React from "react";

const Users = async () => {
  const users = await getUsersApi();
  await store.dispatch(getUsers(users));

  return (
    <main>
      <UsersPreloader users={users} />
      <UsersSearch />
      <ModalUpdate />
    </main>
  );
};

export default Users;
