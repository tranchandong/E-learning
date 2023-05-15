import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../store";
import { handleRegister } from "../store/QuanLyNguoiDung/thunkActions";
// import { handleRegister } from "../store/QuanLyNguoiDung/thunkActions";

const Register = () => {
  const {register, handleSubmit, formState: {errors}} = useForm({mode: "onChange"})
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();


  return (
    <div className="">
      <section className="bg-[#fdfcf0]">
        <div className="flex flex-col items-center justify-center lg:py-0">
          <div className="rounded border-8 my-2 bg-white">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleSubmit(async (value) => {
                    try {
                        dispatch(handleRegister({
                            taiKhoan: value.taiKhoan,
                            matKhau: value.matKhau,
                            email: value.email,
                            soDt: value.soDt,
                            maNhom: value.maNhom,
                            hoTen: value.hoTen,
                        }))         
                    } catch (err) {
                        console.log(err);
                    }
                })}
              >
                <div className="flex">
                  <div className="pe-1">
                    <label
                      htmlFor="taiKhoan"
                      className="block mb-0.5 text-sm font-medium text-gray-900"
                    >
                      User Name
                    </label>
                    <input
                      type="text"
                      id="taiKhoan"
                      pattern=".{4,8}"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="User Name"
                      title="Sorry, your username must be between 4 and 8 characters long."
                      {...register("taiKhoan")}
                    />
                  </div>
                  <div>
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
                      placeholder="Your Full Name"
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
                    placeholder="your email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    {...register("email")}
                  />
                </div>
                <div className="pe-1">
                  <label
                    htmlFor="password"
                    className="block mb-1 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="matKhau"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    {...register("matKhau")}
                  />
                </div>
                <div className="flex">
                  <div className="pe-1">
                    <label
                      htmlFor="number"
                      className="block mb-0.5 text-sm font-medium text-gray-900"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      id="soDt"
                      pattern="[0-9]{10}"
                      placeholder="Your phone number"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      title="Sorry, your Phone Number must be 10 characters long."
                      {...register("soDt")}
                    />
                  </div>{" "}
                  <div className="pe-1">
                    <label
                      htmlFor="maNhom"
                      className="block mb-0.5 text-sm font-medium text-gray-900"
                    >
                      Group ID
                    </label>
                    <input
                      type="text"
                      id="maNhom"
                      placeholder="Your Group ID"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      {...register("maNhom")}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500">
                  Already have an account?{" "}
                  <NavLink
                    to={"/login"}
                    className="font-medium text-primary-600 hover:underline"
                  >
                    Login here
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
