import { baseService } from "./baseServices";

export class QuanLyPhongService extends baseService {
  constructor() {
    super();
  }

  // Api 14: Lấy chi tiết loại phòng
  layChiTietLoaiPhong = () => {
    return this.get(`api/type-jobs`);
  };

  // Api 17: Lấy thông tin chi tiết loại phòng
  layThongTinChiTietLoaiPhong = (idTypeRoom) => {
    return this.get(`api/type-rooms/${idTypeRoom}`);
  };

  // Api 19: Tạo phòng mới
  taoCongViecMoi = (formDataPhong) => {
    return this.post(`api/rooms`, formDataPhong);
  };

  // Api 20: Lấy danh sách phòng
  layDanhSachPhong = () => {
    return this.get(`api/rooms`);
  };

  // Api 21: Xóa phòng
  xoaPhong = (idRoom) => {
    return this.delete(`api/rooms/${idRoom}`);
  };

  // Api 22: Cập nhật thông tin phòng
  capNhatThongTinPhong = (idRoom, formDataUpdate) => {
    return this.put(`api/rooms/${idRoom}`, formDataUpdate);
  };

  // Api 23: Lấy thông tin chi tiết phòng
  layThongTinChiTietPhong = (idRoom) => {
    return this.get(`api/rooms/${idRoom}`);
  };

  // Api 26: Đặt phòng
  datPhong = (idRoom) => {
    return this.patch(`api/rooms/booking/${idRoom}`);
  };

  // Api 28: Hoàn thành phòng
  hoanThanhPhong = (idRoom) => {
    return this.patch(`api/rooms/done/${idRoom}`);
  };

  // Api 29: Lấy danh sách phòng theo tên phòng
  layDanhSachphongTheoTenPhong = (roomName = "") => {
    if (roomName.toLocaleLowerCase().trim() !== "") {
      return this.get(`api/rooms/by-name?name=${roomName}`);
    }
    return this.get(`api/rooms/by-name?name=`);
  };

  // Api 30: Cập nhật hình ảnh phòng
  capNhatHinhAnhCongViec = (idRoom, room) => {
    return this.post(`api/rooms/upload-image/${idRoom}`, room);
  };
}

export const quanLyPhongService = new QuanLyPhongService();
