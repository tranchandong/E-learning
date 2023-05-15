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

export const quanLyNguoiDungServices = {
    Lognin: (query: LoginRequirement) => http.post<LoginResponse>(`QuanLyNguoiDung/DangNhap`, query),
    Register: (query: RegisterRequirement) => http.post(`QuanLyNguoiDung/DangKy`, query),
}