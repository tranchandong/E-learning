import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../store'
import { getUserData } from '../store/QuanLyNguoiDung/thunkActions';

const UserInfomation = () => {
  const {userData} = useSelector((state: RootState) => state.quanLyNguoiDung);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserData())
  }, [dispatch]);

  console.log(userData?.chiTietKhoaHocGhiDanh);
  

  return (
    <div>
        UserInfomation
    </div>
  )
}

export default UserInfomation