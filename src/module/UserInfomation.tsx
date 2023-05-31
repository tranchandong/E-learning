import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Space } from "antd";
import { AppDispatch, RootState } from "../store";
import { getUserData, } from "../store/QuanLyNguoiDung/thunkActions";
import EditInfoModal from "./EditInfoModal";
import { UserOutlined } from "@ant-design/icons";
import { quanLyNguoiDungActions } from "../store/QuanLyNguoiDung/slice";
import { checkToken } from "../constant/api";

const UserInfomation: React.FC = () => {
  const { userData, userDataUpdated } = useSelector((state: RootState) => state.quanLyNguoiDung);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  //State for Modal Antd
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUserValid, setIsUserValid] = useState(false);
  //End Modal Antd

  useEffect(() => {
    dispatch(getUserData());
    checkToken()
    setIsUserValid(true)
  }, [dispatch, isUserValid, userDataUpdated]);


  //Modal Antd
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //End Modal Antd

  return (
    <div className="">
      <h1>Account</h1>
      <hr />
      <div className="flex">
        <div className="p-1 border-t border-green-500">
          <div className=" ">
            <Space wrap size={16}>
              <Avatar shape="square" size={100} icon={<UserOutlined />} />
            </Space>
            <h1>{userData?.taiKhoan}</h1>
          </div>
        </div>
        <div>
          <p className="p-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis illo
            error, ullam earum culpa atque quam dicta nemo maiores velit
            dolores, ut doloribus! Magnam totam, quasi asperiores obcaecati iste
            incidunt. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Debitis ratione, consequuntur architecto, illum quam, ut cupiditate
            tempora hic at natus sit dolorem veritatis minima. In corrupti
            libero quo placeat accusantium.
          </p>
        </div>
      </div>

      <hr />
      <div className="">
        <div className="p-1  grid grid-cols-2 gap-1">
          <div>
            <p>Full Name:</p>
            <p className="font-bold text-lg">{userData?.hoTen}</p>
          </div>
          <div>
            <p>Email Address: </p>
            <p className="font-bold text-lg">{userData?.email}</p>
          </div>
          <div>
            <p>Phone Number:</p>
            <p className="font-bold text-lg">{userData?.soDT}</p>
          </div>
          <div>
            <p>Group:</p>
            <p className="font-bold text-lg">{userData?.maNhom}</p>
          </div>
        </div>
        <Button type="primary" className="absolute bottom-1 right-1"
        onClick={() => {showModal()}}>
          Edit
        </Button>
        <EditInfoModal 
          isModalOpen={isModalOpen}
          handleCancel={handleCancel}
          userData={userData}
        />

      </div>
    </div>
  );
};

export default UserInfomation;
