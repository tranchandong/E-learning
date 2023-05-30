import React from "react";
import { Modal } from "antd";
import { GetCoursesResponse } from "../services/quanLyKhoaHoc.services";
import { LoginResponse } from "../services/quanLyNguoiDung.services";
import { NavLink } from "react-router-dom";

type AdviceModalProps = {
  selectedCourse: GetCoursesResponse | null;
  isModalOpen: boolean;
  handleCancel: () => void;
  handleSubmit: () => void;
  userInfo: LoginResponse | undefined;
};

const AdviceModal: React.FC<AdviceModalProps> = ({
  selectedCourse,
  isModalOpen,
  handleCancel,
  handleSubmit,
  userInfo,
}) => {
  return (
    <Modal
      title={<h1>Get Advice</h1>}
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
      <form className="space-y-4 md:space-y-6" action="#">
        <div className="pe-1">
          <input
            type="text"
            id="hoTen"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Full Name"
          />
        </div>
        <div className="pe-1">
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          />
        </div>
        <div className="pe-1">
          <input
            type="number"
            id="soDt"
            pattern="[0-9]{10}"
            placeholder="Phone number"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            title="Sorry, your Phone Number must be 10 characters long."
          />
        </div>
        <div className="block">
          <h3>Branch</h3>
          <label className="block py-0.5">
            <input type="radio" className="mr-0.5" name="branch" value="Q1" />
            2Bis Nguyễn Thị Minh Khai - Quận 1
          </label> 
          <label className="block py-0.5">
            <input type="radio" className="mr-0.5" name="branch" value="Q3" />
            112 Cao Thắng - Quận 3
          </label> 
          <label className="block py-0.5">
            <input type="radio" className="mr-0.5" name="branch" value="QGV" />
            110 Đường Số 10 - CityLand - Q.Gò Vấp
          </label> 
          <label className="block py-0.5">
            <input type="radio" className="mr-0.5" name="branch" value="QTD" />
            6C - Đường số 8, Linh Tây, Thủ Đức
          </label> 
          <label className="block py-0.5">
            <input type="radio" className="mr-0.5" name="branch" value="DN" />
            Đà Nẵng - 103 Nguyễn Hữu Dật, Hải Châu
          </label> 
          <label className="block py-0.5">
            <input type="radio" className="mr-0.5" name="branch" value="BD" />
            Bình Dương - 230 Đại Lộ Bình Dương
          </label> 
        </div>
      </form>
    </Modal>
  );
};

export default AdviceModal;
