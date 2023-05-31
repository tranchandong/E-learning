import http from "../constant/api"

export type LoginRequirement = {
    taiKhoan: string,
    matKhau: string,
}

export type LoginResponse = {
    taiKhoan: string,
    hoTen: string,
    email: string,
    soDT: string,
    maNhom: string,
    maLoaiNguoiDung: string,
    accessToken: string,
}

export type RegisterRequirement = {
    taiKhoan: string,
    matKhau: string,
    email: string,
    soDt: string,
    maNhom?: string,
    hoTen: string,
}

export type GetUserDataResponse = {
    chiTietKhoaHocGhiDanh: [{
        maKhoaHoc: string,
        tenKhoaHoc: string,
        biDanh: string,
        moTa: string,
        luotXem: number,
        hinhAnh: string,
        ngayTao: string
        danhGia: number
    }] | [],
    taiKhoan: string,
    matKhau: string,
    hoTen: string,
    soDT: string,
    maLoaiNguoiDung: string,
    maNhom: string,
    email: string,
}

export type EditUserRequirement = {
    taiKhoan: string | undefined,
    matKhau: string | undefined,
    hoTen: string | undefined,
    soDT: string | undefined,
    maLoaiNguoiDung: string | undefined,
    maNhom: string | undefined,
    email: string | undefined,
  }

export type GetEditUserResponse = {
    taiKhoan: string,
    matKhau: string,
    hoTen: string,
    soDt: string,
    maLoaiNguoiDung: string,
    maNhom: string,
    email: string,
    biDanh: string,
    maLoaiNguoiDungNavigation: string,
    hocVienKhoaHoc: string,
    khoaHoc: string,
  }

export const quanLyNguoiDungServices = {
    Login: (query: LoginRequirement) => http.post<LoginResponse>(`QuanLyNguoiDung/DangNhap`, query),
    Register: (query: RegisterRequirement) => http.post(`QuanLyNguoiDung/DangKy`, query),
    GetUserData: () => http.post<GetUserDataResponse>(`QuanLyNguoiDung/ThongTinTaiKhoan`),
    EditUser: (query: EditUserRequirement) => http.put<GetEditUserResponse>(`QuanLyNguoiDung/CapNhatThongTinNguoiDung`, query)
}