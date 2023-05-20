import { Button, Card, Modal } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetCoursesResponse } from "../services/quanLyKhoaHoc.services";
import { AppDispatch, RootState } from "../store";
import { FetchCourses, handleEnrollCourses } from "../store/QuanLyKhoaHoc/thunkActions";
import Slider from "react-slick";


const CrouresAll = () => {
  const { coursesList } = useSelector(
    (state: RootState) => state.quanLyKhoaHoc
  );

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(FetchCourses());
  }, [dispatch]);

  //Slider
  const settings = {
    rows: 2,
    arrow: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesPerRow: 4,
    customPaging: (i: number) => {
      return <span>{i + 1}</span>;
    },
    appendDots: (dots: string) => (
      <div
        style={{
          padding: "10px",
          position: "absolute",
          bottom: "-45px",
          width: "100%",
        }}
      >
        <ul style={{ margin: "0px", fontSize: 20 }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="flex justify-center ">
      <div className="w-4/5">
        <div className="flex justify-center">
          <div>
            <div className="w-5/12">
              <h1 className="text-3xl py-2">
                <span className="font-bold">Career Transformation</span> <br />
                Learn Specialized Programming Pathways at{" "}
                <span className="text-yellow-400">E-learning</span>
              </h1>
              <p>
                E-learning offers a detailed, comprehensive, and professional
                programming curriculum aligned with the standards of the
                University of Arizona - USA. Our approach ensures 100% practical
                project-based learning to avoid confusion and enhances critical
                thinking and deep foundational logical skills development,
                enabling easy progression to senior and leadership roles. By
                following the E-learning curriculum, you can save time, costs,
                and secure the best and sustainable job opportunities for career
                advancement.
              </p>
            </div>
            <div className="">
              <img className="w-[280px] rounded" alt="" />
            </div>
          </div>
        </div>
        <hr className="my-2" />
        <div>
        <Slider {...settings} className="mb-3">
            {coursesList?.map((courses, index) => (
              <div key={index} className="my-1 h-[300px]" onClick={() => {
                navigate(`/courses/${courses.tenKhoaHoc}`);
              }}>
                <Card
                  key={index}
                  hoverable
                  style={{
                    width: 250,
                    height: 300,
                    border: "solid",
                  }}
                  cover={
                    <img
                      alt="example"
                      src={courses.hinhAnh}
                      style={{
                        width: 250,
                        height: 200,
                        padding: "10px",
                        objectFit: "contain",
                        borderBottom: "solid",
                        borderColor: "#8080803d",
                      }}
                    />
                  }
                >
                  <Meta
                    title={courses.tenKhoaHoc}
                    description={`${courses.moTa.slice(0, 25)}...`}
                  />
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CrouresAll;
