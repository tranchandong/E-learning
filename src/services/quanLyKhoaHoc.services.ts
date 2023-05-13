import http from "../constant/api";

export type GetFetchCoursesResponse = [{
  maKhoaHoc: string;
  biDanh: string;
  tenKhoaHoc: string;
  moTa: string;
  luotXem: number;
  hinhAnh: string;
  maNhom: string;
  ngayTao: string;
  soLuongHocVien: number;
  nguoiTao: {
    taiKhoan: string;
    hoTen: string;
    maLoaiNguoiDung: string;
    tenLoaiNguoiDung: string;
  };
  danhMucKhoaHoc: {
    maDanhMucKhoahoc: string;
    tenDanhMucKhoaHoc: string;
  };
}];

export type GetFetchCategoryResponse = [{
    maDanhMuc: string,
    tenDanhMuc: string,
}];

export type GetFetchCoursesByCategory = [{
    maKhoaHoc: string;
    biDanh: string;
    tenKhoaHoc: string;
    moTa: string;
    luotXem: number;
    hinhAnh: string;
    maNhom: string;
    ngayTao: string;
    soLuongHocVien: number;
    nguoiTao: {
      taiKhoan: string;
      hoTen: string;
      maLoaiNguoiDung: string;
      tenLoaiNguoiDung: string;
    };
    danhMucKhoaHoc: {
      maDanhMucKhoahoc: string;
      tenDanhMucKhoaHoc: string;
    };
}]

export type GetFetchCoursesDetail = [{
  maKhoaHoc: string;
  biDanh: string;
  tenKhoaHoc: string;
  moTa: string;
  luotXem: number;
  hinhAnh: string;
  maNhom: string;
  ngayTao: string;
  soLuongHocVien: number;
  nguoiTao: {
    taiKhoan: string;
    hoTen: string;
    maLoaiNguoiDung: string;
    tenLoaiNguoiDung: string;
  };
  danhMucKhoaHoc: {
    maDanhMucKhoahoc: string;
    tenDanhMucKhoaHoc: string;
  };
}]

export const quanLyKhoaHocServices = {
  FetchCategory: () => http.get<GetFetchCategoryResponse>(`QuanLyKhoaHoc/LayDanhMucKhoaHoc`),
  FetchCourses: (query: string) => http.get<GetFetchCoursesResponse>(`QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${query}`),
  FetchCouresByCategory: (query: string) => http.get<GetFetchCoursesByCategory>(`QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${query}`),
  FetchCoursesDetail: (query: string) => http.get<GetFetchCoursesDetail>(`QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${query}`),
};
