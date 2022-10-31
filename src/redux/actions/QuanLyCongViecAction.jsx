import { quanLyCongViecService } from "../../services/QuanLyCongViecService";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";
import { history } from "../../App";
import {
  LAY_DANH_SACH_CONG_VIEC_THEO_TEN_CONG_VIEC_ACTION,
  LAY_THONG_TIN_CHI_TIET_LOAI_CONG_VIEC_CHINH,
  LAY_CHI_TIET_LOAI_CONG_VIEC_CHINH_ACTION,
  LAY_THONG_TIN_CHI_TIET_CONG_VIEC,
  LAY_DANH_SACH_CONG_VIEC_ACTION,
  FINISH_JOB,
} from "../types";

// Api 14: Lấy chi tiết loại công việc chính
export const layChiTietLoaiCongViecChinhAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyCongViecService.layChiTietLoaiCongViecChinh();
      if (result.status === 200) {
        await dispatch({
          type: LAY_CHI_TIET_LOAI_CONG_VIEC_CHINH_ACTION,
          chiTietLoaiCongViecChinh: result.data,
        });
      }
    } catch (error) {
      console.log("error", error.response);
    }
  };
};

// Api 17: Lấy Thông tin chi chi tiết loại công việc chính
export const layThongTinChiTietLoaiCongViecChinhAction = (idTypeJob) => {
  return async (dispatch) => {
    try {
      const result = await quanLyCongViecService.layThongTinChiTietLoaiCongViecChinh(idTypeJob);
      if (result.status === 200) {
        await dispatch({
          type: LAY_THONG_TIN_CHI_TIET_LOAI_CONG_VIEC_CHINH,
          thongTinChiTietLoaiCongViecChinh: result.data,
        });
      }
    } catch (error) {
      console.log("error", error.response);
    }
  };
};

// Api 19: Tạo công việc mới
export const taoCongViecMoiAction = (formDataCongViec) => {
  return async (dispatch) => {
    try {
      const result = await quanLyCongViecService.taoCongViecMoi(
        formDataCongViec
      );
      alert("Create job successfully");
    } catch (error) {
      alert("Create job failed, please check again");
      console.log("error", error.response);
    }
  };
};

// Api 20: Lấy danh sách công việc
export const layDanhSachCongViecAction = () => {
  return async (dispatch) => {
    dispatch(displayLoadingAction);
    try {
      const result = await quanLyCongViecService.layDanhSachCongViec();
      if (result.status === 200) {
        await dispatch({
          type: LAY_DANH_SACH_CONG_VIEC_ACTION,
          danhSachCongViec: result.data,
        });
        dispatch(hideLoadingAction);
      }
    } catch (error) {
      console.log("error", error.response);
    }
  };
};

// Api 21: Xóa công việc
export const xoaCongViecAction = (idJob) => {
  return async (dispatch) => {
    try {
      const result = await quanLyCongViecService.xoaCongViec(idJob);
      alert("Delete job successfully");
      dispatch(layDanhSachCongViecTheoTenCongViecAction());
    } catch (error) {
      alert("Delete job failed, please check again");
      console.log("error", error);
    }
  };
};

// Api 22: Cập nhật thông tin công việc
export const capNhatThongTinCongViecAction = (idJob, formDataUpdate) => {
  return async (dispatch) => {
    try {
      const result = await quanLyCongViecService.capNhatThongTinCongViec(
        idJob,
        formDataUpdate
      );
      alert("Update job successfully");
      dispatch(layDanhSachCongViecTheoTenCongViecAction());
      history.push("/admin/listjobs");
      window.location.reload();
    } catch (error) {
      alert("Update job failed, please check again");
      console.log("error", error.response);
    }
  };
};

// Api 23: Lấy thông tin chi tiết công việc
export const layThongTinChiTietCongViecAction = (idJob) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await quanLyCongViecService.layThongTinChiTietCongViec(
        idJob
      );
      if (result.status === 200) {
        await dispatch({
          type: LAY_THONG_TIN_CHI_TIET_CONG_VIEC,
          thongTinChiTietCongViec: result.data,
        });
        dispatch(hideLoadingAction);
      }
    } catch (error) {
      console.log("error", error.response);
    }
  };
};

// Api 26: Đặt công việc
export const datCongViecAction = (idJob) => {
  return async (dispatch) => {
    try {
      const result = await quanLyCongViecService.datCongViec(idJob);
      alert("Successful job booking");
    } catch (error) {
      alert("Job booking failed");
      console.log("error", error.response);
    }
  };
};

// Api 28: Hoàn thành công việc
export const hoanThanhCongViecAction = (idJob) => {
  return async (dispatch) => {
    try {
      const result = await quanLyCongViecService.hoanThanhCongViec(idJob);
      if (result.status === 200) {
        await dispatch({
          type:FINISH_JOB,
          congViecDaHoanThanh: result.data,
        });
        alert("Work done");
      }
    } catch (error) {
      alert("Unfinished work, please check again");
      console.log("error", error.response);
    }
  };
};

// Api 29: Lấy danh sách công việc theo tên công việc (Sử trong trong danh sách công việc Admin Template)
export const layDanhSachCongViecTheoTenCongViecAction = (jobName = "") => {
  return async (dispatch) => {
    dispatch(displayLoadingAction);
    try {
      const result =
        await quanLyCongViecService.layDanhSachCongViecTheoTenCongViec(jobName);
        if (result.status === 200) {
        await dispatch({
          type: LAY_DANH_SACH_CONG_VIEC_THEO_TEN_CONG_VIEC_ACTION,
          danhSachCongViecTheoTenCongViec: result.data,
        });
        dispatch(hideLoadingAction);
      }
    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};

// Api 30: Cập nhật hình ảnh công việc
export const capNhatHinhAnhCongViecAction = (idJob, fileImg) => {
  return async (dispatch) => {
    try {
      const result = await quanLyCongViecService.capNhatHinhAnhCongViec(
        idJob,
        fileImg
      );
      alert("Update image successfully");
      dispatch(layDanhSachCongViecTheoTenCongViecAction());
      history.push("/admin/listjobs");
      window.location.reload();
    } catch (error) {
      alert("Update image failed, please check again");
      console.log("error", error.response);
    }
  };
};
