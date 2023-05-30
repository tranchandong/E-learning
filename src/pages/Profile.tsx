import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import UserInfomation from "../module/UserInfomation";
import UserCourses from "../module/UserCourses";
import { BookOutlined, UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Profile: React.FC = () => {
  const { userData } = useSelector((state: RootState) => state.quanLyNguoiDung)

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: <h1 className="text-xl"><UserOutlined /> Account</h1>,
      children: <UserInfomation />,
    },
    {
      key: "2",
      label: <h1 className="text-xl"><BookOutlined /> Courses</h1>,
      children: <UserCourses />,
    },
  ];

  return (
    <div>
      <hr />
      <div className="flex justify-center py-2 bg-[#fdfcf0]">
        <div className="w-3/4">
          <Tabs defaultActiveKey="1" tabPosition="left" items={items}/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
