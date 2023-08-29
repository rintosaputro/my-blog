import { createSlice } from "@reduxjs/toolkit";

export const initialStateModal = {
  data: {
    name: "",
    email: "",
    id: 0,
    gender: "",
    status: "",
  },
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState: initialStateModal,
  reducers: {
    setDialog: (state, action) => {
      state.data = action.payload.data;
      state.isOpen = action.payload.isOpen;
    },
  },
});

export const { setDialog } = modalSlice.actions;
export default modalSlice.reducer;
