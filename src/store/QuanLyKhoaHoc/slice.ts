import { createSlice } from "@reduxjs/toolkit"
import { GetFetchCategoryResponse, GetFetchCoursesDetail, GetFetchCoursesResponse } from "../../services/quanLyKhoaHoc.services"
import { FetchCategory, FetchCouresByCategory, FetchCourses, FetchCoursesDetail } from "./thunkActions"


type quanLyKhoaHocInitialState = {
    categoryList?: GetFetchCategoryResponse,
    coursesList?: GetFetchCoursesResponse,
    courses?: GetFetchCoursesDetail,
}

const initialState: quanLyKhoaHocInitialState = {

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
        .addCase(FetchCouresByCategory.fulfilled, (state, action) => {
            state.coursesList = action.payload
        })
        .addCase(FetchCoursesDetail.fulfilled, (state, action) => {
            state.courses = action.payload
        })
    },
})