"use client";

import { RootState } from "@/store";
import { setSearchDataUser, setSearchQuery } from "@/store/searchSlice";
import React, { ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UsersList from "./UsersList";
import { User } from "@/types";
import { usersSelector } from "@/store/usersSlice";

const UsersSearch = () => {
  const { searchQuery, data } = useSelector((state: RootState) => state.search);
  const users = useSelector(usersSelector.selectAll);

  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;

    dispatch(setSearchQuery(value));
  };

  useEffect(() => {
    const searchResult = users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    dispatch(setSearchDataUser(searchResult));
  }, [searchQuery]);

  return (
    <div>
      <input
        placeholder="Search user"
        value={searchQuery}
        onChange={handleChange}
        className="rounded border-2 border-[#4FBDBA] border-solid px-4 py-1 md:w-[50%] m-auto block"
      />
      <UsersList users={searchQuery ? data : users} />
    </div>
  );
};

export default UsersSearch;
