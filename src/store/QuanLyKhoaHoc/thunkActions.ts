import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyKhoaHocServices } from "../../services/quanLyKhoaHoc.services";

export const FetchCategory = createAsyncThunk(
    "quanlykhoahoc/fetcgcategory",
    async (_, {rejectWithValue}) => {
        try{
            const res = await quanLyKhoaHocServices.FetchCategory();
            // console.log(res.data);
            return res.data

        }catch (err){
            return rejectWithValue(err)   
        }
    }
)

export const FetchCourses = createAsyncThunk(
    "quanlykhoahoc/fetchcourses",
    async (_, {rejectWithValue}) => {
        try{
            const res = await quanLyKhoaHocServices.FetchCourses("GP01");
            console.log(res.data);
            return res.data
        }catch(err){
            return rejectWithValue(err)
        }
    }
)