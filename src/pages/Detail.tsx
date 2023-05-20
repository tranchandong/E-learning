import { Button } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../store";
import { FetchCoursesDetail } from "../store/QuanLyKhoaHoc/thunkActions";

const Detail = () => {
  const { courses } = useSelector((state: RootState) => state.quanLyKhoaHoc);
  const dispatch = useDispatch<AppDispatch>();
  const param = useParams();

  useEffect(() => {
    if (param?.id) {
      dispatch(FetchCoursesDetail(param.id));
    }
  }, [dispatch, param?.id]);

  console.log(courses);

  return (
    <div>
      {courses?.slice(0,1).map((courses) => {
        return (
          <div key={courses.biDanh}>
            <div className="flex justify-center h-[450px] bg-gradient-to-r from-[#FC5C7D] to-[#6A82FB]">
              <div
                id="banner"
                className="absolute inset-0 flex justify-between items-center w-4/5 mx-auto"
              >
                <div className="text-white">
                  <h1 className="text-5xl py-1 font-bold">
                    {param?.id?.toLocaleUpperCase()}
                  </h1>
                  <p className="py-1">Views: {courses.luotXem} | Ratings: </p>
                  <Button className="text-white">Enroll</Button>
                </div>
                <div className="">
                  <img
                    src={courses?.hinhAnh}
                    className="w-[280px] rounded"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-4/5">
                <h1 className="text-2xl font-bold py-1">DECEPTION</h1>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-4/5">
                <p>{courses.moTa}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Detail;
