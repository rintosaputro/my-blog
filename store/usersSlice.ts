import { baseUrl } from "@/api";
import { User } from "@/types";
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from ".";

export const getUsersApi = async () => {
  const users = await fetch(`${baseUrl}/users`);
  const usersJson = await users.json();
  return usersJson;
};

export const getUsers: any = createAsyncThunk(
  "users/getUsers",
  async (users: User[] = []) => {
    if (users.length) {
      return users;
    }

    const usersData = await getUsersApi();
    return usersData;
  }
);

const usersEntity = createEntityAdapter<User>({
  selectId: (user) => user.id,
});

const usersSlice = createSlice({
  name: "users",
  initialState: usersEntity.getInitialState(),
  extraReducers: {
    [getUsers.fulfilled]: (state, action) => {
      usersEntity.setAll(state, action.payload);
    },
  },
  reducers: {},
});

export const usersSelector = usersEntity.getSelectors(
  (state: RootState) => state.users
);

export default usersSlice.reducer;
