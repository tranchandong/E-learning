import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import {
  FetchCourses,
  handleEnrollCourses,
} from "../store/QuanLyKhoaHoc/thunkActions";
import { Button, Card, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { GetCoursesResponse } from "../services/quanLyKhoaHoc.services";

const CroursesList: React.FC = () => {
  const { coursesList } = useSelector(
    (state: RootState) => state.quanLyKhoaHoc
  );
  const { userInfo } = useSelector((state: RootState) => state.quanLyNguoiDung);

  //State for Modal Antd
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] =
    useState<GetCoursesResponse | null>(null);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { Meta } = Card;

  useEffect(() => {
    dispatch(FetchCourses());
  }, [dispatch]);

  //Modal Antd
  const handleEnrollClick = (course: GetCoursesResponse) => {
    if (userInfo) {
      setSelectedCourse(course);
      showModal();
    } else {
      alert("Login Frist!");
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
              <Modal
                title={<p className="text-2xl">{selectedCourse?.tenKhoaHoc}</p>}
                open={isModalOpen}
                onOk={handleSubmit}
                onCancel={handleCancel}
                okText="Submit"
                cancelButtonProps={{
                  style: { color: "#ea077c", borderColor: "#ea077c" },
                }}
                okButtonProps={{
                  style: { background: "#ea077c", color: "white" },
                }}
              >
                <p className="py-0.5">Description: {selectedCourse?.moTa}</p>
                <p>Views: {selectedCourse?.luotXem}</p>
                <p>Enrolled students: {selectedCourse?.soLuongHocVien}</p>
                <hr className="my-1" />
                <p>Name: {userInfo?.hoTen}</p>
                <p>Email: {userInfo?.email}</p>
                <p>Phone: {userInfo?.soDT}</p>
              </Modal>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CroursesList;
