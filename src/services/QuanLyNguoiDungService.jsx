import { baseService } from "./baseServices";

export class QuanLyNguoiDungService extends baseService {
  constructor() {
    super();
  }

  // Api 1: Lấy danh sách người dùng
  layDanhSachNguoiDung = (name = "") => {
    if (name.toLocaleLowerCase().trim() !== "") {
      return this.get(`api/users/pagination-search?name=${name}`);
    }
    return this.get(`api/users`);
  };

  // Api 2: Tạo người dùng mới
  taoNguoiDungMoi = (formData) => {
    return this.post(`api/users`, formData);
  };

  // Api 3: Lấy thông tin chi tiết của 1 người dùng
  layThongTinChiTietNguoiDung = (idNguoiDung) => {
    return this.get(`api/users/${idNguoiDung}`);
  };

  // Api 4: Cập nhật thông tin người dùng
  capNhatThongTinNguoiDung = (idNguoiDung, formData) => {
    return this.put(`api/users/${idNguoiDung}`, formData);
  };

  // Api 5: Xóa người dùng
  xoaNguoiDung = (idNguoiDung) => {
    return this.delete(`api/users/${idNguoiDung}`);
  };

  // Api 6: Cập nhật ảnh đại diện
  capNhatAnhDaiDien = (img) => {
    return this.post(`api/users/upload-avatar`, img);
  };

  // Api 31: Đăng nhập
  dangNhap = (thongTinDangNhap) => {
    return this.post(`api/auth/signin`, thongTinDangNhap);
  };

  // Api 32: Đăng xuất
  dangKyTaiKhoan = (formDataDangKy) => {
    return this.post("api/auth/signup", formDataDangKy);
  };

  // Api 33: Tạo bình luận
  taoBinhLuan = (comment) => {
    return this.post(`api/comments`,comment);
  };

  // Api 34: Lấy danh sách bình luận
  danhSachBinhLuan = (idJob) => {
    return this.get(`api/comments/by-job/${idJob}`);
  };
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
