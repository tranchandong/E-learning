import { createSlice } from "@reduxjs/toolkit"
import { GetFetchCategoryResponse, GetFetchCoursesDetail, GetFetchCoursesResponse } from "../../services/quanLyKhoaHoc.services"
import { FetchCategory, FetchCouresByCategory, FetchCourses, FetchCoursesDetail, FetchSearchCourses, handleEnrollCourses } from "./thunkActions"


type quanLyKhoaHocInitialState = {
    categoryList?: GetFetchCategoryResponse,
    coursesList?: GetFetchCoursesResponse,
    courses?: GetFetchCoursesDetail,
    keyword?: string,
}

const initialState: quanLyKhoaHocInitialState = {
    keyword: '',
}


export const {reducer: quanLyKhoaHocReducer, actions: quanLyKhoaHocActions} = createSlice({
    name: "quanLyKhoaHoc",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(FetchCategory.fulfilled, (state, action) => {
            state.categoryList = action.payload
        })
        .addCase(FetchCourses.fulfilled, (state, action) => {
            state.coursesList = action.payload
        })
        .addCase(FetchSearchCourses.fulfilled, (state, action) => {
            state.coursesList = action.payload
        }) 
        .addCase(FetchCouresByCategory.fulfilled, (state, action) => {
            state.coursesList = action.payload
        })
        .addCase(FetchCoursesDetail.fulfilled, (state, action) => {
            state.courses = action.payload
        })
        .addCase(handleEnrollCourses.fulfilled, (state, action) => {
            alert("Enroll Successfully")            
        })
    },
})