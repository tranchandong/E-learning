import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { FetchCourses } from "../store/QuanLyKhoaHoc/thunkActions";
import { Button, Card } from "antd";
import { useNavigate } from "react-router-dom";

const CroursesList: React.FC = () => {
  const { coursesList } = useSelector(
    (state: RootState) => state.quanLyKhoaHoc
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate()
  const { Meta } = Card;

  useEffect(() => {
    dispatch(FetchCourses());
  }, [dispatch]);

  console.log(coursesList);

  return (
    <div className="flex justify-center py-2 bg-gray-500">
      <div className="w-4/5 grid grid-cols-4 gap-1">
        {coursesList?.slice(0, 8).map((courses, index) => (
          <Card
            hoverable
            style={{ width: 250, height: 300 }}
            cover={
              <img
                alt="example"
                src={courses.hinhAnh}
                style={{ width: 300, height: 150, objectFit: "contain", borderBottom: "solid"}}
              />
            }
          >
            <Meta
              title={courses.tenKhoaHoc}
              description={`${courses.moTa.slice(0, 25)}...`}
            />

            <Button
                  onClick={() => {navigate(`/courses/${courses.tenKhoaHoc}`)}}
            className="absolute right-4 bottom-4 bg-red-500 text-white">
              Submit
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CroursesList;
