import { createSlice } from "@reduxjs/toolkit";
import { GetUserDataResponse, LoginResponse } from "../../services/quanLyNguoiDung.services";
import { getUserData, handleLogin, handleRegister } from "./thunkActions";

type quanLyNguoiDungInitialState = {
    userInfo?: LoginResponse,
    userData?: GetUserDataResponse,
}

const initialState: quanLyNguoiDungInitialState = {

}


export const {reducer: quanLyNguoiDungReducer, actions: quanLyNguoiDungActions} = createSlice({
    name: "quanLyNguoiDung",
    initialState,
    reducers: {
        getUser: (state) => {
            const userInfo = localStorage.getItem("user");
            if (userInfo) {
                state.userInfo = JSON.parse(userInfo);
            }
        },
    },
    extraReducers(builder) {
        builder
        .addCase(handleLogin.fulfilled, (state, action) => {
            state.userInfo = action.payload
            localStorage.setItem("user", JSON.stringify(state.userInfo));
        })
        .addCase(handleRegister.fulfilled, (state, action) => {
            alert("ok")
        })
        .addCase(getUserData.fulfilled, (state, action) => {
            state.userData = action.payload
        })
    },
})