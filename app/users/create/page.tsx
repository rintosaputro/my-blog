"use client";

import ButtonSubmit from "@/components/ButtonSubmit";
import Radio from "@/components/Radio";
import TextField from "@/components/TextField";
import { createUser, usersSelector } from "@/store/usersSlice";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CreateUser = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [gender, setGender] = useState<string>("male");
  const [status, setStatus] = useState<string>("active");

  const dispatch = useDispatch();
  const router = useRouter();

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };
  const handleStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  const users = useSelector(usersSelector.selectAll);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const payload = { name, email, gender, status };
    dispatch(createUser(payload));
    console.log(users);
    router.push("/users");
  };

  return (
    <main>
      <form onSubmit={handleSubmit} className="w-fit m-auto">
        <TextField
          label="Name"
          placeholder="Your name"
          value={name}
          onChange={handleName}
        />
        <TextField
          label="Email"
          type="email"
          placeholder="Your email"
          value={email}
          onChange={handleEmail}
        />
        <h2 className="font-semibold text-[18px] mb-2">Gender:</h2>
        <div className="flex gap-3">
          <Radio
            label="male"
            value="male"
            checked={gender === "male"}
            onChange={handleGender}
          />
          <Radio
            label="female"
            value="female"
            checked={gender === "female"}
            onChange={handleGender}
          />
        </div>
        <h2 className="font-semibold text-[18px] mt-6 mb-2">Status:</h2>
        <div className="flex gap-3">
          <Radio
            label="active"
            value="active"
            checked={status === "active"}
            onChange={handleStatus}
          />
          <Radio
            label="inactive"
            value="inactive"
            checked={status === "inactive"}
            onChange={handleStatus}
          />
        </div>
        <ButtonSubmit>Create User</ButtonSubmit>
      </form>
    </main>
  );
};

export default CreateUser;
