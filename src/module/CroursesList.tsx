import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { FetchCourses } from "../store/QuanLyKhoaHoc/thunkActions";
import { Card } from "antd";

const CroursesList: React.FC = () => {
  const { coursesList } = useSelector(
    (state: RootState) => state.quanLyKhoaHoc
  );
  const dispatch = useDispatch<AppDispatch>();
  const { Meta } = Card;

  useEffect(() => {
    dispatch(FetchCourses());
  }, [dispatch]);

  console.log(coursesList);

  return (
    <div className="flex justify-center py-2 bg-gray-500">
      <div className="w-4/5 grid grid-cols-4 gap-1">
        {coursesList?.slice(0,8).map((courses, index) => (
          <Card
            hoverable
            style={{ width: 250, height: 300 }}
            cover={<img alt="example" src={courses.hinhAnh} style={{width: 300, height: 150, objectFit: "contain"}} />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CroursesList;
