import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../store";
import {
  FetchCourses,
  FetchSearchCourses,
} from "../store/QuanLyKhoaHoc/thunkActions";

const Serp = () => {
  const { coursesList, keyword } = useSelector(
    (state: RootState) => state.quanLyKhoaHoc
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const param = useParams();

  useEffect(() => {
    if (param?.search) {
      dispatch(FetchSearchCourses(param.search));
    }
  }, [dispatch]);

  console.log(coursesList?.length);

  return (
    <div>
      <hr />
      <div className="py-1 flex justify-center">
        <div className="w-4/5 ">
          <div className="py-2 ">
            {coursesList?.length == undefined ? (
              <div>
                <h1>No results containing all your search terms were found.</h1>
              </div>
            ) : (
              <h2>
                About <span className="font-bold">{coursesList?.length}</span> results 
              </h2>
            )}
          </div>
          <div>
            {coursesList?.map((courses, index) => {
              return (
                <div className="border p-1" key={index}>
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
                      <h1 className="font-bold text-2xl">
                        {courses.tenKhoaHoc}
                      </h1>
                      <p className="text-gray-500">
                        <span>{courses.moTa}</span>
                      </p>
                      <p className="text-gray-500">
                        {" "}
                        Views: <span>{courses.luotXem}</span>
                      </p>
                    </div>
                  </div>
                  <hr className="my-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serp;
