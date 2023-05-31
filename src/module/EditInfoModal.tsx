import React from "react";
import { Modal } from "antd";
import { GetUserDataResponse } from "../services/quanLyNguoiDung.services";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
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
              soDT: data.soDt || userData?.soDT,
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
      okText="Update"
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
                className="bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder={userData?.taiKhoan}
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
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder={userData?.hoTen}
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
              type="text"
              id="email"
              placeholder={userData?.email}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              {...register("email", {
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
            <p className="text-[13px] text-red-500 p-0.5 font-bold">
              {errors?.email?.message?.toString()}
            </p>
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
              placeholder={userData?.soDT}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              {...register("soDt", {
                pattern: {
                  value:
                    /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
                  message:
                    "Phone number must be number and 10 digits started with 0",
                },
              })}
            />
            <p className="text-[13px] text-red-500 p-0.5 font-bold">
              {errors?.soDt?.message?.toString()}
            </p>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditInfoModal;
