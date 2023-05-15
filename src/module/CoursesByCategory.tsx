import { Button, Card } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../store";
import { FetchCouresByCategory } from "../store/QuanLyKhoaHoc/thunkActions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CoursesByCategory = () => {
  const { coursesList } = useSelector(
    (state: RootState) => state.quanLyKhoaHoc
  );
  const distpatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const param = useParams();
  const { Meta } = Card;

  const settings = {
    rows: 2,
    arrow: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesPerRow: 4,
    customPaging: (i: number) => {
      return <span>{i + 1}</span>;
    },
    appendDots: (dots: string) => (
      <div
        style={{
          padding: "10px",
          position: "absolute",
          bottom: "-45px",
          width: "100%",
        }}
      >
        <ul style={{ margin: "0px", fontSize: 20 }}> {dots} </ul>
      </div>
    ),
  };

  useEffect(() => {
    if (param?.id) {
      distpatch(FetchCouresByCategory(param.id));
    }
  }, [distpatch, param?.id]);

  return (
    <div className="">
      <div className="flex justify-center py-2 bg-gray-500">
        <div className="w-4/5">
          <Slider {...settings} className="">
            {coursesList?.map((courses, index) => (
              <div key={index} className="my-1 h-[300px]">
                <Card
                  hoverable
                  style={{ width: 250, height: 300 }}
                  cover={
                    <img
                      alt="example"
                      src={courses.hinhAnh}
                      style={{ width: 300, height: 150, objectFit: "contain" }}
                    />
                  }
                >
                  <Meta
                    title={courses.tenKhoaHoc}
                    description={`${courses.moTa.slice(0, 25)}...`}
                  />
                  
                  <Button
                  onClick={() => {navigate(`/courses/${courses.tenKhoaHoc}`)}}
                  className="absolute right-4 bottom-4 bg-red-500 text-white">Detail</Button>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CoursesByCategory;