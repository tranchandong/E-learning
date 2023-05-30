import { Button, message } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { GetCoursesResponse } from "../services/quanLyKhoaHoc.services";
import { AppDispatch, RootState } from "../store";
import { handleEnrollCourses } from "../store/QuanLyKhoaHoc/thunkActions";
import AdviceModal from "./AdviceModal";

const CoursesBanner = () => {
  const { userInfo } = useSelector((state: RootState) => state.quanLyNguoiDung);
  //State for Modal Antd
  const [isAdviceModalOpen, setIsAdviceModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] =
    useState<GetCoursesResponse | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  //Modal Antd
  const handleAdviceClick = () => {
    showAdviceModal();
  };
  const showAdviceModal = () => {
    setIsAdviceModalOpen(true);
  };

  const handleSubmit = () => {
    message.success("Registration advice successful. We will contact you for consultation shortly!")
    setIsAdviceModalOpen(false);
  };

  const handleCancel = () => {
    setIsAdviceModalOpen(false);
  };
  //End Modal Antd

  return (
    <div className="flex h-[500px] w-full bg-black">
      <div className="w-7/12 bg-banner bg-contain bg-no-repeat bg-center">
        {/* <img className="w-[500px] h-[500px]" src="../../public/img/banner.webp" alt="" /> */}
        {/* <img className="banner" src="" alt="" /> */}
      </div>
      <div className="p-1 w-5/12 relative">
        <div className="w-3/4 absolute top-1/2 transform -translate-y-1/2">
          <h1 className='text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#FC5C7D] to-[#6A82FB]"'>
            START YOUR CAREER
          </h1>
          <p className="w-3/4 py-1 text-2xl text-white">
            Become a professional programmer at{" "}
            <span className="text-yellow-400">Edemy.</span>
          </p>
          <div>
            <div className="">
              <NavLink to={"/courses"}>
                <Button className=" mr-1">Discover</Button>
              </NavLink>
              <Button
                className=""
                onClick={() => {
                  handleAdviceClick();
                }}
              >
                Get Advice
              </Button>
              <AdviceModal
                selectedCourse={selectedCourse}
                isModalOpen={isAdviceModalOpen}
                handleCancel={handleCancel}
                handleSubmit={handleSubmit}
                userInfo={userInfo}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesBanner;
