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
  const { userInfo, status } = useSelector((state: RootState) => state.quanLyNguoiDung);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const keywordRef = useRef("");

  useEffect(() => {
    dispatch(quanLyNguoiDungActions.getUser());
    dispatch(FetchCategory());
  }, [dispatch]);

  const handleChange = (e: any) => {
    const { value, id } = e.target;
    keywordRef.current = value;
  };

  const handleSubmit = (e: any) => {
    navigate(`/${keywordRef.current}`);
  };

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
      label: (<NavLink to={'/profile'}><p className="text-right">{userInfo?.hoTen}</p></NavLink>),
      key: "0",
    },
    {
      label: (<NavLink to={'/profile'}><p className="text-right">{userInfo?.email}</p></NavLink>),
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
      label: <p className="text-right text-red-500" onClick={() => {dispatch(quanLyNguoiDungActions.handleLogout())}}>Logout</p>,
      key: "7",
    },
  ];

  const userMenu: MenuProps["items"] = userItems;

  return (
    <nav className="flex justify-center bg-[#fdfcf0] z-20 top-0 left-0">
      <div className="flex flex-wrap items-center justify-between p-1 w-4/5">
        <div className="flex w-4/5">
          <NavLink to={"/home"} className="flex items-center me-2">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Edemy
            </span>
          </NavLink>
          <Dropdown className="text-lg p-1" menu={{ items }}>
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
            <NavLink to={"/login"}>
              <div
                className="font-medium text-sm p-[0.8rem] border border-solid rounded text-center md:mr-0 hover:bg-gray-200"
              >
                Sign In
              </div>
            </NavLink>
            <NavLink to={"/register"}>
              <div
                className="text-white bg-black ms-1 font-medium text-sm p-[0.8rem] rounded text-center md:mr-0 hover:bg-gray-800 "
              onClick={() => {localStorage.removeItem("status")}}
              >
                Sign Up
              </div>
            </NavLink>
          </div>
        )}
        {userInfo && (
          <div>
            <Dropdown
              className="text-xl font-bold p-1"
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
