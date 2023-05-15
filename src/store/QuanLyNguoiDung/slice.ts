import { createSlice } from "@reduxjs/toolkit";
import { LoginResponse } from "../../services/quanLyNguoiDung.services";
import { HandleLogin, handleRegister } from "./thunkActions";

type quanLyNguoiDungInitialState = {
    userInfo?: LoginResponse
}

const initialState: quanLyNguoiDungInitialState = {

}


export const {reducer: quanLyNguoiDungReducer, actions: quanLyNguoiDungActions} = createSlice({
    name: "quanLyNguoiDung",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(HandleLogin.fulfilled, (state, action) => {
            state.userInfo = action.payload
            localStorage.setItem("user", JSON.stringify(state.userInfo));
        })
        .addCase(handleRegister.fulfilled, (state, action) => {
            alert("ok")
        })
    },
})