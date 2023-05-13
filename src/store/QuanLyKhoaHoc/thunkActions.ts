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
            return res.data
        }catch(err){
            return rejectWithValue(err)
        }
    }
)

export const FetchCouresByCategory = createAsyncThunk(
    "quanlykhoahoc/fetchcouresbycategory",
    async (payload: string, {rejectWithValue}) => {
        try{
            const res = await quanLyKhoaHocServices.FetchCouresByCategory(payload)
            return res.data
        }catch (err){
            return rejectWithValue(err)
        }
    }
)

export const FetchCoursesDetail = createAsyncThunk(
    "quanlykhoahoc/fetchcoursesdetail",
    async (payload: string, {rejectWithValue}) => {
        try {
            const res = await quanLyKhoaHocServices.FetchCoursesDetail(payload)
            console.log(res.data);
            return res.data
        }catch (err){
            return rejectWithValue(err)
        }
    }
)