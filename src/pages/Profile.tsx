import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import UserInfomation from "../module/UserInfomation";
import UserCourses from "../module/UserCourses";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: <h1 className="text-2xl">Infomation</h1>,
    children: <UserInfomation />,
  },
  {
    key: "2",
    label: <h1 className="text-2xl">Your Courses</h1>,
    children: <UserCourses />,
  },
];

const Profile: React.FC = () => {
  return (
    <div className="flex justify-center py-2">
      <div className="w-3/4">
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </div>
  );
};

export default Profile;
