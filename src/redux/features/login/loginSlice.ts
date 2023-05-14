import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { toast } from "react-toastify";

interface LoginState {
    loading: boolean;
    token: string;
    isLoggedIn: boolean;
    user: any;
}

const initialState: LoginState = {
  loading: false,
  token: localStorage.getItem("token") || "",
  isLoggedIn: localStorage.getItem("token") ? true : false,
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || "") : null,
};

export const loginSlice:any = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginRequest: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.token = action.payload.token;
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            state.isLoggedIn = true;
            state.user = action.payload.user;
            toast.success("Logged in Successfully");
        },
        loginFail: (state, action) => {
            state.loading = false;
            toast.error(action.payload);
        },
        logout: (state) => {
            state.token = "";
            localStorage.removeItem("token");
            state.isLoggedIn = false;
            state.user = null;
            toast.success("Logged out Successfully");
        },
    },
});

export const { loginRequest, loginSuccess, loginFail, logout } = loginSlice.actions;

export const selectAuth = (state: RootState) => state.login;

export default loginSlice.reducer;