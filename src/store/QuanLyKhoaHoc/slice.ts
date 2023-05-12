import { createSlice } from "@reduxjs/toolkit"
import { GetFetchCategoryResponse, GetFetchCoursesResponse } from "../../services/quanLyKhoaHoc.services"
import { FetchCategory, FetchCourses } from "./thunkActions"


type quanLyKhoaHocInitialState = {
    categoryList?: GetFetchCategoryResponse,
    coursesList?: GetFetchCoursesResponse,
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
    },
})