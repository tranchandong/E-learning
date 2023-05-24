import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Space } from "antd";
import { AppDispatch, RootState } from "../store";
import { getUserData } from "../store/QuanLyNguoiDung/thunkActions";
import { MailOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";

const UserInfomation: React.FC = () => {
  const { userData } = useSelector((state: RootState) => state.quanLyNguoiDung);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  console.log(userData?.chiTietKhoaHocGhiDanh);

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
        <Button type="primary" className="absolute bottom-1 right-1">
          Edit
        </Button>
      </div>
      {/* <div className="w-6/12">
        {userData?.chiTietKhoaHocGhiDanh.map((courses, index) => {
          return <div className="p-1">
            <div className="border p-1">
              <div className="flex">
                <div>
                  <div
                    // className="w-[150px] h-[150px]"
                    style={{
                      width: 150,
                      height: 150,
                      backgroundImage: `URL(${courses.hinhAnh})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "none",
                      backgroundPosition: "center",

                    }}
                  ></div>
                </div>
                <div className="px-1">
                  <h1 className="font-bold text-2xl" >{courses.tenKhoaHoc}</h1>
                  <p className="text-gray-500"><span>{courses.moTa}</span></p>
                  <p className="text-gray-500"> Views: <span>{courses.luotXem}</span></p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        })}
      </div> */}
    </div>
  );
};

export default UserInfomation;
