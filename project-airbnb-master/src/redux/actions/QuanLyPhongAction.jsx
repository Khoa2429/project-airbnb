import { quanLyPhongService } from "../../services/QuanLyPhongService";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";
import { history } from "../../App";
import {
  LAY_DANH_SACH_PHONG_THEO_TEN_PHONG_ACTION,
  LAY_THONG_TIN_CHI_TIET_LOAI_PHONG,
  LAY_CHI_TIET_LOAI_PHONG_ACTION,
  LAY_THONG_TIN_CHI_TIET_PHONG,
  LAY_DANH_SACH_PHONG_ACTION,
  FINISH_ROOM,
} from "../types";

// Api 14: Lấy chi tiết loại phòng
export const layChiTietLoaiPhongAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhongService.layChiTietLoaiPhong();
      if (result.status === 200) {
        await dispatch({
          type: LAY_CHI_TIET_LOAI_PHONG_ACTION,
          chiTietLoaiPhongChinh: result.data,
        });
      }
    } catch (error) {
      console.log("error", error.response);
    }
  };
};

// Api 17: Lấy Thông tin chi chi tiết loại phòng
export const layThongTinChiTietLoaiPhongAction = (idTypeRoom) => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhongService.layThongTinChiTietLoaiPhong(idTypeRoom);
      if (result.status === 200) {
        await dispatch({
          type: LAY_THONG_TIN_CHI_TIET_LOAI_PHONG,
          thongTinChiTietLoaiPhong: result.data,
        });
      }
    } catch (error) {
      console.log("error", error.response);
    }
  };
};

// Api 19: Tạo phòng mới
export const taoPhongMoiAction = (formDataPhong) => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhongService.taoPhongMoi(
        formDataPhong
      );
      alert("Create room successfully");
    } catch (error) {
      alert("Create room failed, please check again");
      console.log("error", error.response);
    }
  };
};

// Api 20: Lấy danh sách phòng
export const layDanhSachPhongAction = () => {
  return async (dispatch) => {
    dispatch(displayLoadingAction);
    try {
      const result = await quanLyPhongService.layDanhSachPhong();
      if (result.status === 200) {
        await dispatch({
          type: LAY_DANH_SACH_PHONG_ACTION,
          danhSachPhong: result.data,
        });
        dispatch(hideLoadingAction);
      }
    } catch (error) {
      console.log("error", error.response);
    }
  };
};

// Api 21: Xóa phòng
export const xoaPhongAction = (idRoom) => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhongService.xoaPhong(idRoom);
      alert("Delete room successfully");
      dispatch(layDanhSachPhongTheoTenPhongAction());
    } catch (error) {
      alert("Delete room failed, please check again");
      console.log("error", error);
    }
  };
};

// Api 22: Cập nhật thông tin phòng
export const capNhatThongTinPhongAction = (idRoom, formDataUpdate) => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhongService.capNhatThongTinPhong(
        idRoom,
        formDataUpdate
      );
      alert("Update room successfully");
      dispatch(layDanhSachPhongTheoTenPhongAction());
      history.push("/admin/listrooms");
      window.location.reload();
    } catch (error) {
      alert("Update room failed, please check again");
      console.log("error", error.response);
    }
  };
};

// Api 23: Lấy thông tin chi tiết phòng
export const layThongTinChiTietPhongAction = (idRoom) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await quanLyPhongService.layThongTinChiTietPhong(
        idRoom
      );
      if (result.status === 200) {
        await dispatch({
          type: LAY_THONG_TIN_CHI_TIET_PHONG,
          thongTinChiTietPhong: result.data,
        });
        dispatch(hideLoadingAction);
      }
    } catch (error) {
      console.log("error", error.response);
    }
  };
};

// Api 26: Đặt phòng
export const datPhongAction = (idRoom) => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhongService.datPhong(idRoom);
      alert("Successful room booking");
    } catch (error) {
      alert("RoomRoom booking failed");
      console.log("error", error.response);
    }
  };
};

// Api 28: Hoàn thành phòng
export const hoanThanhPhongAction = (idRoom) => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhongService.hoanThanhPhong(idRoom);
      if (result.status === 200) {
        await dispatch({
          type:FINISH_ROOM,
          phongDaHoanThanh: result.data,
        });
        alert("Room done");
      }
    } catch (error) {
      alert("Unfinished room, please check again");
      console.log("error", error.response);
    }
  };
};

// Api 29: Lấy danh sách phòn theo tên phòng (Sử trong trong danh sách phòng Admin Template)
export const layDanhSachPhongTheoTenPhongAction = (roomName = "") => {
  return async (dispatch) => {
    dispatch(displayLoadingAction);
    try {
      const result =
        await quanLyPhongService.layDanhSachPhongTheoTenPhong(roomName);
        if (result.status === 200) {
        await dispatch({
          type: LAY_DANH_SACH_PHONG_THEO_TEN_PHONG_ACTION,
          danhSachPhongTheoTenPhong: result.data,
        });
        dispatch(hideLoadingAction);
      }
    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};

// Api 30: Cập nhật hình ảnh phòng
export const capNhatHinhAnhPhongAction = (idRoom, fileImg) => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhongService.capNhatHinhAnhPhong(
        idRoom,
        fileImg
      );
      alert("Update image successfully");
      dispatch(layDanhSachPhongTheoTenPhongAction());
      history.push("/admin/listrooms");
      window.location.reload();
    } catch (error) {
      alert("Update image failed, please check again");
      console.log("error", error.response);
    }
  };
};
