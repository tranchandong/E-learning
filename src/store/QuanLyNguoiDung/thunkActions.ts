import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import { checkToken } from "../../constant/api";
import {
  EditUserRequirement,
  LoginRequirement,
  quanLyNguoiDungServices,
  RegisterRequirement,
} from "../../services/quanLyNguoiDung.services";

export const handleLogin = createAsyncThunk(
  "quanlynguoidung/handlelogin",
  async (query: LoginRequirement, { rejectWithValue }) => {
    try {
      const res = await quanLyNguoiDungServices.Login(query);
      if (res.status === 200) {
        message.success("Login Successfully")
        checkToken()
        return res.data;
      }else if(res.status === 500){
        message.error(res.statusText)
      }
    } catch (err) {
    //   alert("Rejected, Check username or password");
        message.error("Rejected, Check username or password")
      return rejectWithValue(err);
    }
  }
);

export const handleRegister = createAsyncThunk(
  "quanlynguoidung/handleregister",
  async (query: RegisterRequirement, { rejectWithValue }) => {
    try {
      const res = await quanLyNguoiDungServices.Register(query);
      return res.data;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const handleEditUser = createAsyncThunk(
  "quanlynguoidung/handleedituser",
  async (query: EditUserRequirement, { rejectWithValue }) => {
    try {
      const res = await quanLyNguoiDungServices.EditUser(query);
      console.log(res.data);
      return res.data;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const getUserData = createAsyncThunk(
  "quanlynguoidung/getuserdata",
  async (_, { rejectWithValue }) => {
    try {
      const res = await quanLyNguoiDungServices.GetUserData();
      return res.data;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
