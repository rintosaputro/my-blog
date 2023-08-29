import { User } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

type Open = null | "update-user" | "delete-user";

interface InitialStateModalI {
  data: User;
  open: Open;
}

export const initialStateModal: InitialStateModalI = {
  data: {
    name: "",
    email: "",
    id: 0,
    gender: "",
    status: "",
  },
  open: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState: initialStateModal,
  reducers: {
    setDialog: (state, action) => {
      state.data = action.payload.data;
      state.open = action.payload.open;
    },
  },
});

export const { setDialog } = modalSlice.actions;
export default modalSlice.reducer;
