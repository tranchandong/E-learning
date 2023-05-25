import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AdviceModal from "../module/AdviceModal";
import EnrollModal from "../module/EnrollModal";
import { GetCoursesResponse } from "../services/quanLyKhoaHoc.services";
import { AppDispatch, RootState } from "../store";
import {
  FetchCoursesDetail,
  handleEnrollCourses,
} from "../store/QuanLyKhoaHoc/thunkActions";

const Detail = () => {
  const { courses } = useSelector((state: RootState) => state.quanLyKhoaHoc);
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
  }

  const showEnrollModal = () => {
    setIsEnrollModalOpen(true);
  };

  const showAdviceModal = () => {
    setIsAdviceModalOpen(true)
  }

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

  return (
    <div>
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
    </div>
  );
};

export default Detail;
