import React, { useEffect, useRef } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { NavLink, useNavigate } from "react-router-dom";
import { FetchCategory } from "../store/QuanLyKhoaHoc/thunkActions";
import { quanLyNguoiDungActions } from "../store/QuanLyNguoiDung/slice";
import Search from "antd/es/transfer/search";
import { checkToken } from "../constant/api";

const Header: React.FC = () => {
  const { categoryList } = useSelector(
    (state: RootState) => state.quanLyKhoaHoc
  );
  const { userInfo } = useSelector((state: RootState) => state.quanLyNguoiDung);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(quanLyNguoiDungActions.getUser());
    checkToken();
  }, [dispatch]);

  useEffect(() => {
    dispatch(FetchCategory());
  }, [dispatch]);

  const keywordRef = useRef("");

  const handleChange = (e: any) => {
    const { value, id } = e.target;
    keywordRef.current = value;
    // setSearchParam({search:keywordRef.current});
    console.log(keywordRef.current);
  };

  const handleSubmit = (e: any) => {
    navigate(`/${keywordRef.current}`);
  };

  // console.log(keywordRef);

  const item = categoryList?.map((category) => ({
    key: category.maDanhMuc,
    label: (
      <NavLink to={`/category/${category.maDanhMuc}`}>
        {category.tenDanhMuc}
      </NavLink>
    ),
  }));
  const items: MenuProps["items"] = item;

  const userItems: MenuProps["items"] = [
    {
      label: <p className="text-right">{userInfo?.hoTen}</p>,
      key: "0",
    },
    {
      label: <p className="text-right">{userInfo?.email}</p>,
      key: "1",
    },
    {
      type: "divider",
      key: "2",
    },
    {
      label: (
        <NavLink to={"/profile"}>
          {" "}
          <p className="text-right">Profile</p>{" "}
        </NavLink>
      ),
      key: "3",
    },
    {
      label: (
        <NavLink to={"/profile"}>
          {" "}
          <p className="text-right">Dashboard</p>{" "}
        </NavLink>
      ),
      key: "4",
    },
    {
      label: (
        <NavLink to={"/profile"}>
          {" "}
          <p className="text-right">Settings</p>{" "}
        </NavLink>
      ),
      key: "5",
    },
    {
      type: "divider",
      key: "6",
    },
    {
      label: <p className="text-right">Logout</p>,
      key: "7",
    },
  ];

  const userMenu: MenuProps["items"] = userItems;

  return (
    <nav className="flex justify-center bg-white dark:bg-gray-900 z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="flex flex-wrap items-center justify-between p-1 w-4/5">
        <div className="flex w-4/5">
          <NavLink to={"/home"} className="flex items-center me-2">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              E-Learning
            </span>
          </NavLink>
          <Dropdown className="text-lg text-white p-1" menu={{ items }}>
            <Space>
              Courses Category
              <DownOutlined />
            </Space>
          </Dropdown>
          <div id="search" className="flex items-center me-2 w-2/4">
            <form onSubmit={handleSubmit} className="w-full" action="">
              <Search
                placeholder="Search Crourses"
                // name="search"
                onChange={handleChange}
              />
            </form>
          </div>
        </div>
        {!userInfo && (
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <NavLink to={"/register"}>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign Up
              </button>
            </NavLink>
            <NavLink to={"/login"}>
              <button
                type="button"
                className="ms-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign In
              </button>
            </NavLink>
          </div>
        )}
        {userInfo && (
          <div>
            <Dropdown
              className="text-lg text-white p-1"
              menu={{ items: userMenu }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <span>{userInfo?.taiKhoan}</span>
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
