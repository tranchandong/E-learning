import React, { useEffect, useRef } from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { NavLink, useNavigate } from "react-router-dom";
import { FetchCategory } from "../store/QuanLyKhoaHoc/thunkActions";
import Search from "antd/es/transfer/search";

const Header: React.FC = () => {
  const { categoryList } = useSelector(
    (state: RootState) => state.quanLyKhoaHoc
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(FetchCategory());
  }, [dispatch]);

  const keywordRef = useRef('');

  const handleChange = (e: any) => {
    const { value, id } = e.target;
    keywordRef.current = value;
    // setSearchParam({search:keywordRef.current});
    console.log(keywordRef.current);
    
  }

  const handleSubmit = (e: any) => {
    navigate(`/${keywordRef.current}`);
  }

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
           <form onSubmit={handleSubmit} className="w-full" action=""><input className="w-full p-0.5 rounded" type="text" placeholder="Search Crourses" name="search" onChange={handleChange}/></form>
          </div>
        </div>
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
      </div>
    </nav>
  );
};

export default Header;
