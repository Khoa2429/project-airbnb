import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import {
  CAP_NHAT_THONG_TIN_NGUOI_DUNG,
  DANG_KY_ACTION,
  DANG_NHAP_ACTION,
  DANH_SACH_BINH_LUAN,
  LAY_DANH_SACH_NGUOI_DUNG,
  LAY_THONG_TIN_CHI_TIET_NGUOI_DUNG,
  TAO_NGUOI_DUNG_MOI,
} from "../types";
import { history } from "../../App";
import { USER_LOGIN } from "../../util/config";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";

// Api 1: Lấy danh sách người dùng
export const layDanhSachNguoiDungAction = (name = "") => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);

      const result = await quanLyNguoiDungService.layDanhSachNguoiDung(name);

      if (result.status === 200) {
        dispatch({
          type: LAY_DANH_SACH_NGUOI_DUNG,
          danhSachTaiKhoan: result.data,
        });
        dispatch(hideLoadingAction);
      }
    } catch (error) {
      console.log("error", error.response);
    }
  };
};

// Api 2: Tạo người dùng mới
export const taoNguoiDungMoigAction = (formData) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.taoNguoiDungMoi(formData);
      if (result.status === 201) {
        dispatch({
          type: TAO_NGUOI_DUNG_MOI,
          danhSachTaiKhoan: result.data,
        });
        alert("Add user successfully");
      }
    } catch (error) {
      alert("Add user failed, please check again");
      console.log("error", error.response);
    }
  };
};

// Api 3: Lấy thông tin chi tiết của 1 người dùng
export const layThongTinChiTietNguoiDungAction = (idNguoiDung) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layThongTinChiTietNguoiDung(
        idNguoiDung
      );
      if (result.status === 200) {
        dispatch({
          type: LAY_THONG_TIN_CHI_TIET_NGUOI_DUNG,
          thongTinChiTietNguoiDung: result.data,
        });
      }
    } catch (error) {
      console.log("error", error.response);
    }
  };
};

// Api 4: Cập nhật thông tin người dùng
export const capNhatThongTinNguoiDungAction = (idNguoiDung, formData) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.capNhatThongTinNguoiDung(
        idNguoiDung,
        formData
      );
      if (result.status === 200) {
        dispatch({
          type: CAP_NHAT_THONG_TIN_NGUOI_DUNG,
          thongTinnguoiDungCapNhat: result.data,
        });
        alert("Update infomation successfully");
        dispatch(layThongTinChiTietNguoiDungAction(idNguoiDung));

        // Sau khi cập nhật thành công nếu là tài khoản của admin đăng đăng nhập thì quay về infoadmin, nếu chỉnh trong danh sách thì quay về danh sách
        if (
          result.data._id ===
          JSON.parse(localStorage.getItem("USER_LOGIN")).user._id
        ) {
          history.push("/admin/infoadmin");
          window.location.reload();
        } else {
          history.push("/admin/listaccount");
          window.location.reload();
        }
      }
    } catch (error) {
      alert("Update infomation failed, please check again");
      console.log("error", error.response);
    }
  };
};

// Api 5: Xóa người dùng
export const xoaNguoiDungAction = (idNguoiDung) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.xoaNguoiDung(idNguoiDung);
      alert("Delete user successfully");
      dispatch(layDanhSachNguoiDungAction());
    } catch (error) {
      alert("Delete user failed, please check again");
      console.log("error", error.response);
    }
  };
};

// Api 6: Cập nhật ảnh đại diện
export const capNhatAnhDaiDienAction = (img) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.capNhatAnhDaiDien(img);
console.log(result)
      alert("Update avatar successfully");
    } catch (error) {
      alert("Update avatar failed, please check again");
      console.log("error", error.response);
    }
  };
};

// Api 31: Đăng nhập
export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);
      if (result.status === 200) {
        await dispatch({
          type: DANG_NHAP_ACTION,
          thongTinDangNhap: result.data,
        });

        // Thông báo đăng nhập thành công và quay về trang chủ
        alert("Logged in successfully");
        history.push("/home");
        window.location.reload();
      }
    } catch (error) {
      alert("Login failed, username or password is incorrect");
      console.log("error", error.response);
    }
  };
};

// Api 32: Đăng xuất
export const dangKyTaiKhoanAction = (formDataDangKy) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangKyTaiKhoan(
        formDataDangKy
      );

      if (result.status === 201) {
        dispatch({
          type: DANG_KY_ACTION,
          formDataDangKy: result.data,
        });

        // Thông báo đăng ký thành công và đến trang đăng nhập
        alert("Successful registration, go to login page");
        history.push("/login");
        window.location.reload();
      }
    } catch (error) {
      alert("Registration failed, please check again");
      console.log("error", error);
    }
  };
};

// Api 33: Tạo bình luận
export const taoBinhLuanAction = (comment) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.taoBinhLuan(comment);
      window.location.reload();
    } catch (error) {
      console.log("error", error);
    }
  };
};

// Api 34: Lấy danh sách bình luận
export const danhSachBinhLuanAction = (idRoom) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.danhSachBinhLuan(idRoom);

      if (result.status === 200) {
        dispatch({
          type: DANH_SACH_BINH_LUAN,
          danhSachBinhLuan: result.data,
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};
