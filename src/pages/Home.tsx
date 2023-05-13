import React from "react";
import CoursesBanner from "../module/CoursesBanner";
import CroursesList from "../module/CroursesList";

const Home = () => {
  return (
    <div>
      <CoursesBanner />
      <div className="flex justify-center">
        <div className="w-4/5">
          <h1 className="text-2xl font-bold py-1">NEW RELEASE</h1>
        </div>
      </div>
      <CroursesList />
    </div>
  );
};

export default Home;
