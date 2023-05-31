import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import {
  FetchCourses,
  handleEnrollCourses,
} from "../store/QuanLyKhoaHoc/thunkActions";
import { Button, Card, message, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { GetCoursesResponse } from "../services/quanLyKhoaHoc.services";
import EnrollModal from "./EnrollModal";
import { ToastContainer, toast } from "react-toastify";
import { ToastMessage } from "./ToastMessage/ToastMessage";
import { checkToken } from "../constant/api";

const CroursesList: React.FC = () => {
  const { coursesList } = useSelector(
    (state: RootState) => state.quanLyKhoaHoc
  );
  const { userInfo } = useSelector((state: RootState) => state.quanLyNguoiDung);
  //State for Modal Antd
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] =
    useState<GetCoursesResponse | null>(null);
  //End Modal Antd

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { Meta } = Card;

  useEffect(() => {
    dispatch(FetchCourses());
  }, [dispatch]);

  //Modal Antd
  const handleEnrollClick = (course: GetCoursesResponse) => {
    if (!userInfo) {
      message.info("Please log in before enrolling.")
      navigate("/login");
    } else {
      setSelectedCourse(course);
      showModal();
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = () => {
    console.log(selectedCourse?.maKhoaHoc);
    console.log(userInfo?.taiKhoan);
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
  //End Modal Antd

  return (
    <div className="flex justify-center py-2">
      <div className="w-4/5 grid grid-cols-4 gap-1">
        {coursesList?.slice(0, 8).map((courses, index) => (
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
                  objectFit: "cover",
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
        ))}
      </div>
    </div>
  );
};

export default CroursesList;
