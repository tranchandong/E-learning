import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../store";
import { FetchCourses, FetchSearchCourses } from "../store/QuanLyKhoaHoc/thunkActions";

const Serp = () => {
    const { coursesList, keyword } = useSelector((state: RootState) => state.quanLyKhoaHoc);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const param = useParams()
    console.log(param);

    useEffect(() => {
        if(param?.search){
            dispatch(FetchSearchCourses(param.search))
        }
    }, [dispatch])
    
    console.log(coursesList);
    

  return (
    <div className="flex justify-center py-2 bg-gray-500">
      <div className="w-4/5">
        <div>
          <h1>About 73,900,000 results (0.41 seconds)</h1>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default Serp;
