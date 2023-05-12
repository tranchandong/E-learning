import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { quanLyKhoaHocReducer } from "./QuanLyKhoaHoc/slice";
import { quanLyNguoiDungReducer } from "./QuanLyNguoiDung/slice";

export const store = configureStore ({
    reducer: {
        quanLyKhoaHoc: quanLyKhoaHocReducer,
        quanLyNguoiDung: quanLyNguoiDungReducer,
    },
})

export type RootState = ReturnType <typeof store['getState']>
export type AppDispatch = typeof store['dispatch']
export const useAppDispatch: () => AppDispatch = useDispatch