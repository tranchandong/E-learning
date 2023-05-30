import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CoursesBanner from "../module/CoursesBanner";
import CroursesList from "../module/CroursesList";
import { AppDispatch, RootState } from "../store";
import { getUserData } from "../store/QuanLyNguoiDung/thunkActions";

const Home = () => {
  const { userData } = useSelector((state: RootState) => state.quanLyNguoiDung);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getUserData());
  }, [userData]);
  return (
    <div>
      <CoursesBanner />
      <div className=" w-8/12 m-auto">
        <div className="text-center">
          <h1 className="text-3xl py-2">
            <span className="font-bold">Career Transformation</span> <br />
            Learn Specialized Programming Pathways at <br />
            <span className="text-yellow-400">Edemy</span>
          </h1>
          <p>
            E-learning offers a detailed, comprehensive, and professional
            programming curriculum aligned with the standards of the University
            of Arizona - USA. Our approach ensures 100% practical project-based
            learning to avoid confusion and enhances critical thinking and deep
            foundational logical skills development, enabling easy progression
            to senior and leadership roles. By following the E-learning
            curriculum, you can save time, costs, and secure the best and
            sustainable job opportunities for career advancement.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum esse
            expedita quos? Explicabo atque sapiente animi vitae rerum
            distinctio, fugiat dolores, deleniti tempore qui consequatur
            excepturi praesentium nam quo. Sunt.
          </p>
        </div>
      </div>
      <hr className="w-4/5 mx-auto my-1" />

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
