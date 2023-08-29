"use client";

import React, { useEffect, useState } from "react";
import TextField from "./TextField";
import Radio from "./Radio";
import Button from "./Button";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { updateUser } from "@/store/usersSlice";
import { RootState } from "@/store";
import { initialStateModal, setDialog } from "@/store/modalSlice";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const ModalUpdateUser = () => {
  const dispatch = useDispatch();
  const { data, open } = useAppSelector((state) => state.modal);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    const { name, email, status } = data;
    setName(name);
    setEmail(email);
    setStatus(status);
  }, [data]);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  const handleClose = () => dispatch(setDialog(initialStateModal));

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const payload = { name, email, status };
    const { id } = data;

    dispatch(updateUser({ payload, id }));
    handleClose();
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[100vh] max-h-full justify-center items-center bg-slate-950/50 ${
        open === "update-user" ? "flex" : "hidden"
      }`}
    >
      <div className="relative w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shado">
          <div className="flex items-start justify-between p-4 border-b rounded-t">
            <h3 className="text-xl font-semibold text-gray-900">Update User</h3>
          </div>
          <form
            onSubmit={handleSubmit}
            className="p-4 md:p-7 m-auto block w-full"
          >
            <TextField
              fullwidth
              label="Name"
              placeholder="Your name"
              value={name}
              onChange={handleName}
            />
            <TextField
              fullwidth
              label="Email"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={handleEmail}
            />
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
            <div className="flex items-center pt-5 space-x-2 border-t border-gray-200 rounded-b mt-8">
              <Button type="submit" variant="primary">
                Save
              </Button>
              <Button type="button" variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalUpdateUser;
