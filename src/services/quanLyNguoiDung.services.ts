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
    }],
    taiKhoan: string,
    matKhau: string,
    hoTen: string,
    soDT: string,
    maLoaiNguoiDung: string,
    maNhom: string,
    email: string,
}

export const quanLyNguoiDungServices = {
    Login: (query: LoginRequirement) => http.post<LoginResponse>(`QuanLyNguoiDung/DangNhap`, query),
    Register: (query: RegisterRequirement) => http.post(`QuanLyNguoiDung/DangKy`, query),
    GetUserData: () => http.post<GetUserDataResponse>(`QuanLyNguoiDung/ThongTinTaiKhoan`),
}