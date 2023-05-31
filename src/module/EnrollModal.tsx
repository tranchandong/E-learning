import React from 'react';
import { Modal } from 'antd';
import { GetCoursesResponse } from "../services/quanLyKhoaHoc.services";
import { LoginResponse } from "../services/quanLyNguoiDung.services";
import { checkToken } from '../constant/api';

type EnrollModalProps = {
  selectedCourse: GetCoursesResponse | null,
  isModalOpen: boolean,
  handleCancel: () => void;
  handleSubmit: () => void;
  userInfo: LoginResponse | undefined
}

const EnrollModal: React.FC<EnrollModalProps> = ({
  selectedCourse,
  isModalOpen,
  handleCancel,
  handleSubmit,
  userInfo,
}) => {
  checkToken();
  return (
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
  );
};

export default EnrollModal;
