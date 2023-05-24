import { Button } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { AppDispatch, RootState } from "../store";
import { handleCancelCourses } from "../store/QuanLyKhoaHoc/thunkActions";

const UserCourses = () => {
  const { userData } = useSelector((state: RootState) => state.quanLyNguoiDung)
  const dispatch = useDispatch<AppDispatch>();

  const settings = {
    rows: 3,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h1>Your Courses</h1>
      <hr />
      <Slider {...settings}>
        {userData?.chiTietKhoaHocGhiDanh?.map((courses, index) => {
          return (
            <div key={index}>
              <div className="relative border p-1">
                <div className="flex">
                  <div>
                    <div
                      // className="w-[150px] h-[150px]"
                      style={{
                        width: 100,
                        height: 100,
                        backgroundImage: `URL(${courses.hinhAnh})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "none",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  </div>
                  <div className="px-1">
                    <h1 className="font-bold text-2xl">{courses.tenKhoaHoc}</h1>
                    <p className="text-gray-500">
                      <span>{courses.moTa}</span>
                    </p>
                    <p className="text-gray-500">
                      Views: <span>{courses.luotXem}</span>
                    </p>
                  </div>
                </div>
                <div className="absolute right-0 bottom-0">
                  <Button className="text-[#ea077c] border border-[#ea077c] mr-1">
                    Detail
                  </Button>
                  <Button
                    className="bg-red-500 text-white"
                    onClick={() => {
                      dispatch(
                        handleCancelCourses({
                          maKhoaHoc: courses.maKhoaHoc,
                          taiKhoan: userData.taiKhoan,
                        })
                      );
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
              <hr className="my-1" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default UserCourses;
