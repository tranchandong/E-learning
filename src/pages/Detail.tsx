import { Button, Card, Modal } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import AdviceModal from "../module/AdviceModal";
import EnrollModal from "../module/EnrollModal";
import { GetCoursesResponse } from "../services/quanLyKhoaHoc.services";
import { AppDispatch, RootState } from "../store";
import {
  FetchCourses,
  FetchCoursesDetail,
  handleEnrollCourses,
} from "../store/QuanLyKhoaHoc/thunkActions";

const Detail = () => {
  const { courses, coursesList } = useSelector((state: RootState) => state.quanLyKhoaHoc);
  const { userInfo } = useSelector((state: RootState) => state.quanLyNguoiDung);
  

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const param = useParams();

  //State for Modal Antd
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [isAdviceModalOpen, setIsAdviceModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] =
    useState<GetCoursesResponse | null>(null);

  useEffect(() => {
    if (param?.id) {
      dispatch(FetchCoursesDetail(param.id));
    }
  }, [dispatch, param?.id]);

  useEffect(() => {
    dispatch(FetchCourses());
  }, [dispatch]);

  //Modal Antd
  const handleEnrollClick = (course: GetCoursesResponse) => {
    if (userInfo) {
      setSelectedCourse(course);
      showEnrollModal();
    } else {
      alert("Login Frist!");
      navigate("/login");
    }
  };

  const handleAdviceClick = () => {
    showAdviceModal();
  };

  const showEnrollModal = () => {
    setIsEnrollModalOpen(true);
  };

  const showAdviceModal = () => {
    setIsAdviceModalOpen(true);
  };

  const handleSubmit = () => {
    dispatch(
      handleEnrollCourses({
        maKhoaHoc: selectedCourse?.maKhoaHoc,
        taiKhoan: userInfo?.taiKhoan,
      })
    );
    setIsEnrollModalOpen(false);
  };

  const handleCancel = () => {
    setIsEnrollModalOpen(false);
    setIsAdviceModalOpen(false);
  };
  //End Modal Antd

  const settings = {
    rows: 1,
    arrow: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesPerRow: 4,
    customPaging: (i: number) => {
      return <span className="hover:text-blue-500 p-1 mr-2">{i + 1}</span>;
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
        <ul className="" style={{ margin: "0px", fontSize: 20 }}>
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
  };

  return (
    <div className="bg-[#fdfcf0]">
      <div className=" bg-gradient-to-r from-[#FC5C7D] to-[#6A82FB]">
        {courses?.slice(0, 1).map((courses) => {
          return (
            <div
              key={courses.biDanh}
              id="banner"
              className="m-auto py-10 flex justify-between w-4/5"
            >
              <div className="text-white w-7/12">
                <h1 className="text-5xl py-1 font-bold">
                  {param?.id?.toLocaleUpperCase()}
                </h1>
                <p>DECEPTION: {courses.moTa}</p>
                <p className="py-1">VIEWS: {courses.luotXem} | Ratings: </p>
                <div className="py-1">
                  <Button
                    onClick={() => {
                      handleAdviceClick();
                    }}
                    className="text-[#ea077c] border border-[#ea077c] mr-1"
                  >
                    Get Advice
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
                    isModalOpen={isEnrollModalOpen}
                    handleCancel={handleCancel}
                    handleSubmit={handleSubmit}
                    userInfo={userInfo}
                  />
                  <AdviceModal
                    selectedCourse={selectedCourse}
                    isModalOpen={isAdviceModalOpen}
                    handleCancel={handleCancel}
                    handleSubmit={handleSubmit}
                    userInfo={userInfo}
                  />
                </div>
              </div>
              <div className="w-5/12 relative">
                <img
                  src={courses?.hinhAnh}
                  className="w-[280px] rounded absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-4/5 m-auto py-1">
        <div className="border-gray-200 border-solid p-1 rounded">
          <div>
            <h2>Requirements</h2>
            <ul className="p-1 leading-8">
              <li className="list-disc">
                No programming experience needed - I'll teach you everything you
                need to know
              </li>
              <li className="list-disc">
                A Mac or PC computer with access to the internet
              </li>
              <li className="list-disc">
                No paid software required - I'll teach you how to use PyCharm,
                Jupyter Notebooks and Google Colab
              </li>
              <li className="list-disc">
                I'll walk you through, step-by-step how to get all the software
                installed and set up
              </li>
            </ul>
          </div>
          <div>
            <h2>Who this course is for:</h2>
            <ul className="p-1 leading-8">
              <li className="list-disc">
                Office workers, students, small/home business workers, and
                administrators would want to improve their productivity.
              </li>
              <li className="list-disc">
                Aspiring software engineers who want to add skills to their
                programming toolbelt.
              </li>
              <li className="list-disc">
                Computer users who have heard the "learn to code" message, but
                want practical reasons to learn programming.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-4/5 m-auto py-1">
        <h2>People Also Viewed These Items</h2>
          <Slider {...settings} className="mb-3">
            {coursesList?.slice(0, 12).map((courses, index) => (
              <div
                key={index}
                className="my-1 h-[300px]"
                onClick={() => {
                  navigate(`/courses/${courses.tenKhoaHoc}`);
                }}
              >
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
                      alt={courses.biDanh}
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
  );
};

export default Detail;
