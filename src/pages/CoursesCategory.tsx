import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CoursesByCategory from "../module/CoursesByCategory";

const CoursesCategory = () => {
    const param = useParams()
  return (
    <div>
      <div>
        <div className="flex justify-center bg-gradient-to-r from-[#FC5C7D] to-[#6A82FB]">
          <div className="w-4/5">
            <h1 className="text-5xl text-white py-2 font-bold">
              {param?.id?.toLocaleUpperCase()}
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-4/5">
            <h1 className="text-xl py-1">MOST POPULAR COURSE</h1>
          </div>
        </div>
      </div>
      <CoursesByCategory />
    </div>
  );
};

export default CoursesCategory;
