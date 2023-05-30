import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { checkToken } from "../../constant/api";
import { GetEditUserResponse, GetUserDataResponse, LoginResponse } from "../../services/quanLyNguoiDung.services";
import { getUserData, handleEditUser, handleLogin, handleRegister } from "./thunkActions";

type quanLyNguoiDungInitialState = {
    userInfo?: LoginResponse,
    userData?: GetUserDataResponse,
    userDataUpdated?: GetEditUserResponse,
    status?: number,
}

const initialState: quanLyNguoiDungInitialState = {
    status: undefined,
}


export const {reducer: quanLyNguoiDungReducer, actions: quanLyNguoiDungActions} = createSlice({
    name: "quanLyNguoiDung",
    initialState,
    reducers: {
        getUser: (state) => {
            const userInfo = localStorage.getItem("user");
            if (userInfo) {
                state.userInfo = JSON.parse(userInfo);
                message.success("ok")
            }
        },
        handleLogout: (state) => {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            state.userInfo = undefined;
        }
    },
    extraReducers(builder) {
        builder
        .addCase(handleLogin.fulfilled, (state, action) => {
            state.userInfo = action.payload
            localStorage.setItem("user", JSON.stringify(state.userInfo));
            checkToken()
        })
        .addCase(handleRegister.fulfilled, (state, action) => {
            state.status = action.payload
            localStorage.setItem("status", JSON.stringify(state.status)) 
        })
        .addCase(getUserData.fulfilled, (state, action) => {
            state.userData = action.payload
        })
        .addCase(handleEditUser.fulfilled, (state, action) => {
            state.userDataUpdated = action.payload
            alert("ok")
        })
    },
})