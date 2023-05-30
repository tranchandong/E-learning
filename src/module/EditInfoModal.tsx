import React from "react";
import { Modal } from "antd";
import { GetCoursesResponse } from "../services/quanLyKhoaHoc.services";
import {
  GetUserDataResponse,
  LoginResponse,
} from "../services/quanLyNguoiDung.services";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../store";
import { handleEditUser } from "../store/QuanLyNguoiDung/thunkActions";

type EditInfoProps = {
  isModalOpen: boolean;
  handleCancel: () => void;
  // handleSubmitModal: () => void;
  userData: GetUserDataResponse | undefined;
};

const EditInfoModal: React.FC<EditInfoProps> = ({
  isModalOpen,
  handleCancel,
  userData,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  return (
    <Modal
      title={<p className="text-2xl">Edit Account</p>}
      open={isModalOpen}
      onOk={handleSubmit(async (data) => {
        console.log(data);
        
        try {
          dispatch(
            handleEditUser({
              taiKhoan: userData?.taiKhoan,
              matKhau: userData?.matKhau,
              hoTen: data.hoTen || userData?.hoTen,
              soDT: data.soDT || userData?.soDT,
              maLoaiNguoiDung: userData?.maLoaiNguoiDung,
              maNhom: userData?.maNhom,
              email: data.email || userData?.email,
            })
          );
        } catch (err) {
          console.log(err);
        }
        handleCancel();
      })}
      onCancel={handleCancel}
      okText="Submit"
    >
      <div className="py-1">
        <form className="space-y-4 md:space-y-6" action="#">
          <div className="flex">
            <div className="pe-1 w-3/6">
              <label
                htmlFor="taiKhoan"
                className="block mb-0.5 text-sm font-medium text-gray-900"
              >
                User Name
              </label>
              <input
                disabled
                type="text"
                id="taiKhoan"
                pattern=".{4,8}"
                className="bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder={userData?.taiKhoan}
                title="Sorry, your username must be between 4 and 8 characters long."
                {...register("taiKhoan")}
              />
            </div>
            <div className="w-3/6 pe-1">
              <label
                htmlFor="email"
                className="block mb-0.5 text-sm font-medium text-gray-900"
              >
                Full Name
              </label>
              <input
                type="text"
                id="hoTen"
                pattern=".{5,20}"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder={userData?.hoTen}
                title="Sorry, your Full Name must be between 5 and 20 characters long."
                {...register("hoTen")}
              />
            </div>
          </div>
          <div className="pe-1">
            <label
              htmlFor="email"
              className="block mb-0.5 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder={userData?.email}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              {...register("email")}
            />
          </div>
          <div className="pe-1">
            <label
              htmlFor="number"
              className="block mb-0.5 text-sm font-medium text-gray-900"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="soDT"
              pattern="[0-9]{10}"
              placeholder={userData?.soDT}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              title="Sorry, your Phone Number must be 10 characters long."
              {...register("soDT")}
            />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditInfoModal;
