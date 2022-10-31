import { baseService } from "./baseServices";

export class QuanLyCongViecService extends baseService {
  constructor() {
    super();
  }

  // Api 14: Lấy chi tiết loại công việc chính
  layChiTietLoaiCongViecChinh = () => {
    return this.get(`api/type-jobs`);
  };

  // Api 17: Lấy thông tin chi tiết loại công việc chính
  layThongTinChiTietLoaiCongViecChinh = (idTypeJob) => {
    return this.get(`api/type-jobs/${idTypeJob}`);
  };

  // Api 19: Tạo công việc mới
  taoCongViecMoi = (formDataCongViec) => {
    return this.post(`api/jobs`, formDataCongViec);
  };

  // Api 20: Lấy danh sách công việc
  layDanhSachCongViec = () => {
    return this.get(`api/jobs`);
  };

  // Api 21: Xóa công việc
  xoaCongViec = (idJob) => {
    return this.delete(`api/jobs/${idJob}`);
  };

  // Api 22: Cập nhật thông tin công việc
  capNhatThongTinCongViec = (idJob, formDataUpdate) => {
    return this.put(`api/jobs/${idJob}`, formDataUpdate);
  };

  // Api 23: Lấy thông tin chi tiết công việc
  layThongTinChiTietCongViec = (idJob) => {
    return this.get(`api/jobs/${idJob}`);
  };

  // Api 26: Đặt công việc
  datCongViec = (idJob) => {
    return this.patch(`api/jobs/booking/${idJob}`);
  };

  // Api 28: Hoàn thành công việc
  hoanThanhCongViec = (idJob) => {
    return this.patch(`api/jobs/done/${idJob}`);
  };

  // Api 29: Lấy danh sách công việc theo tên công việc
  layDanhSachCongViecTheoTenCongViec = (jobName = "") => {
    if (jobName.toLocaleLowerCase().trim() !== "") {
      return this.get(`api/jobs/by-name?name=${jobName}`);
    }
    return this.get(`api/jobs/by-name?name=`);
  };

  // Api 30: Cập nhật hình ảnh công việc
  capNhatHinhAnhCongViec = (idJob, job) => {
    return this.post(`api/jobs/upload-image/${idJob}`, job);
  };
}

export const quanLyCongViecService = new QuanLyCongViecService();
