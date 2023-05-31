import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../store";
import { handleRegister } from "../store/QuanLyNguoiDung/thunkActions";
// import { handleRegister } from "../store/QuanLyNguoiDung/thunkActions";

const Register = () => {
  const { status} = useSelector((state:RootState) => state.quanLyNguoiDung)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem("status")){
      navigate("/login");
    }
  },[localStorage.getItem("status")])
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <hr />
      <section className="bg-[#fdfcf0]">
        <div className="flex flex-col items-center justify-center lg:py-0">
          <div className="rounded border-solid my-2 bg-white">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleSubmit(async (value) => {
                  try {
                    dispatch(
                      handleRegister({
                        taiKhoan: value.taiKhoan,
                        matKhau: value.matKhau,
                        email: value.email,
                        soDt: value.soDt,
                        maNhom: "GP01",
                        hoTen: value.hoTen,
                      })
                    );
                  } catch (err) {
                    console.log(err);
                  }
                })}
              >
                <div className="flex">
                  <div className="pe-1 block">
                    <label
                      htmlFor="taiKhoan"
                      className="block mb-0.5 text-sm font-medium text-gray-900"
                    >
                      User Name
                    </label>
                    <input
                      type="text"
                      id="taiKhoan"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
                      placeholder="User Name"
                      {...register("taiKhoan", {
                        required: "Enter your User Name",
                        maxLength: {
                          value: 10,
                          message: "4-10 characters",
                        },
                        minLength: {
                          value: 4,
                          message: "4-10 characters",
                        },
                      })}
                    />
                    <p className="text-[13px] text-red-500 p-0.5 font-bold">
                      {errors?.taiKhoan?.message?.toString()}
                    </p>
                  </div>
                  <div className=" pe-1">
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
                      placeholder="Full Name"
                      {...register("hoTen", {
                        required: "Enter your Full Name",
                      })}
                    />
                    <p className="text-[13px] text-red-500 p-0.5 font-bold">
                      {errors?.hoTen?.message?.toString()}
                    </p>
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
                    placeholder="Email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    {...register("email", {
                      required: "Enter your Email",
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
                    {...register("matKhau", {
                      required: "Enter your Password",
                      pattern: {
                        value:
                          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/,
                        message: "At least 1 uppercase letter, number and special character.",
                      },
                    })}
                  />
                  <p className="text-[13px] text-red-500 p-0.5 font-bold">
                    {errors?.matKhau?.message?.toString()}
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
                    type="tel"
                    id="soDt"
                    placeholder="Phone number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    {...register("soDt", {
                      required: "Enter your Phone Number",
                      pattern: {
                        value: /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
                        message: "Phone number must be number and 10 digits started with 0"
                      }
                    })}
                  />
                  <p className="text-[13px] text-red-500 p-0.5 font-bold">
                    {errors?.soDt?.message?.toString()}
                  </p>
                </div>
                {/* <div className="pe-1">
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
                  </div> */}
                <button
                  type="submit"
                  className="w-full pe-1 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
