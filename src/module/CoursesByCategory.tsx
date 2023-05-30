import { Button, Card, message, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../store";
import {
  FetchCouresByCategory,
  handleEnrollCourses,
} from "../store/QuanLyKhoaHoc/thunkActions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GetCoursesResponse } from "../services/quanLyKhoaHoc.services";
import EnrollModal from "./EnrollModal";

const CoursesByCategory = () => {
  const { coursesList } = useSelector(
    (state: RootState) => state.quanLyKhoaHoc
  );
  const { userInfo } = useSelector((state: RootState) => state.quanLyNguoiDung);
  //Modal Antd
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] =
    useState<GetCoursesResponse | null>(null);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const param = useParams();
  const { Meta } = Card;

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

  useEffect(() => {
    if (param?.id) {
      dispatch(FetchCouresByCategory(param.id));
    }
  }, [dispatch, param?.id]);

  //Modal Antd
  const handleEnrollClick = (course: GetCoursesResponse) => {
    if (userInfo) {
      setSelectedCourse(course);
      showModal();
    } else {
      message.info("Please log in before enrolling.")
      navigate("/login");
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = () => {
    dispatch(
      handleEnrollCourses({
        maKhoaHoc: selectedCourse?.maKhoaHoc,
        taiKhoan: userInfo?.taiKhoan,
      })
    );
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="">
      <div className="flex justify-center py-2">
        <div className="w-4/5">
          <Slider {...settings} className="">
            {coursesList?.map((courses, index) => (
              <div key={index} className="my-1 h-[300px]">
                <Card
                  key={index}
                  hoverable
                  style={{
                    width: 250,
                    height: 300,
                    cursor: "default",
                    border: "solid",
                  }}
                  cover={
                    <img
                      alt={courses.biDanh}
                      src={courses.hinhAnh}
                      style={{
                        width: 250,
                        height: 150,
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

                  <div className="absolute right-4 bottom-4">
                    <Button
                      onClick={() => {
                        navigate(`/courses/${courses.tenKhoaHoc}`);
                      }}
                      className="text-[#ea077c] border border-[#ea077c]"
                    >
                      Detail
                    </Button>
                    <Button
                      onClick={() => {
                        handleEnrollClick(courses);
                      }}
                      className="bg-[#ea077c] text-white border ms-0.5"
                    >
                      Enroll
                    </Button>
                    <EnrollModal
                      selectedCourse={selectedCourse}
                      isModalOpen={isModalOpen}
                      handleCancel={handleCancel}
                      handleSubmit={handleSubmit}
                      userInfo={userInfo}
                    />
                  </div>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CoursesByCategory;
