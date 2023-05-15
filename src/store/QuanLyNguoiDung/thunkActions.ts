import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginRequirement, quanLyNguoiDungServices, RegisterRequirement } from "../../services/quanLyNguoiDung.services";

export const HandleLogin = createAsyncThunk(
    "quanlynguoidung/handlelogin",
    async (query: LoginRequirement, {rejectWithValue}) => {
        try{
            const res = await quanLyNguoiDungServices.Lognin(query)
            console.log(res.data);
            return res.data
        }catch (err){
            return rejectWithValue(err)
        }
    }
)

export const handleRegister = createAsyncThunk(
    "quanlynguoidung/handleregister",
    async (query: RegisterRequirement, {rejectWithValue}) => {
        try{
            const res = await quanLyNguoiDungServices.Register(query)
            console.log(res.data);
            return res.data
        }catch (err){
            rejectWithValue(err)
        }
    }
)