import { accessToken, baseUrl } from "@/api";
import { User } from "@/types";
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from ".";

export const getUsersApi = async () => {
  const users = await fetch(`${baseUrl}/users`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const usersJson = await users.json();
  return usersJson;
};

export const getUsers: any = createAsyncThunk(
  "users/getUsers",
  async (users: User[] = []) => {
    if (users.length) {
      console.log("aaaaaaaaaaaiiiiiiiiiinnnnnnnnnnnniiiiiiiii", users);
      return users;
    }

    const usersData = await getUsersApi();
    console.log("iiiiiiiiiinnnnnnnnnnnniiiiiiiii", usersData);
    return usersData;
  }
);

export const createUser: any = createAsyncThunk(
  "users/createUser",
  async (payload: User) => {
    const { name, email, gender, status } = payload;
    const response = await fetch(`${baseUrl}/users`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        gender,
        status,
      }),
    });

    const responseJson = await response.json();
    console.log("iiiinnnnniiiii", responseJson);
    return responseJson;
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
    [createUser.fulfilled]: (state, action) => {
      usersEntity.addOne(state, action.payload);
    },
  },
  reducers: {},
});

export const usersSelector = usersEntity.getSelectors(
  (state: RootState) => state.users
);

export default usersSlice.reducer;
