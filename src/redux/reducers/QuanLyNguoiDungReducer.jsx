import { Token, USER_LOGIN } from "../../util/config";
import { DANG_KY_ACTION, DANG_NHAP_ACTION, DANH_SACH_BINH_LUAN, LAY_DANH_SACH_NGUOI_DUNG, LAY_THONG_TIN_CHI_TIET_NGUOI_DUNG } from "../types";

// Kiểm tra trong localStorage đã có thông tin đăng nhập hay chưa, nếu có rồi thì không cần đăng nhập lại
let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN)).user;
}
const stateDefault = {
  // Đăng nhập
  userLogin: user,
  thongTinNguoiDungDangNhap: {}, // Tách ra để sau này dễ lấy data chứ trong userLogin cũng có
  
  // Đăng ký
  userRegister: {},

  // Thông tin chi tiết người dùng
  thongTinChiTietNguoiDung: [],

  // Danh sách người dùng,
  danhSachTaiKhoan: [],

  // Danh sách bình luận
  danhSachBinhLuan:[],

};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DANG_NHAP_ACTION: {
      const { thongTinDangNhap } = action;
      // Lưu thông tin đăng nhập vào localStorege
      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
      localStorage.setItem("Token", JSON.stringify(thongTinDangNhap.token));
      // Thông tin người dùng đăng nhập
      state.thongTinNguoiDungDangNhap = action.thongTinDangNhap;
      state.userLogin = thongTinDangNhap.user
      // Lưu thông tin đăng nhập vào state
      return { ...state };
    }

    case DANG_KY_ACTION: {
      state.userRegister = action.formDataDangKy;
      return { ...state };
    }

    case LAY_THONG_TIN_CHI_TIET_NGUOI_DUNG: {
      state.thongTinChiTietNguoiDung = action.thongTinChiTietNguoiDung;
      return { ...state };
    }

    case LAY_DANH_SACH_NGUOI_DUNG: {
      state.danhSachTaiKhoan = action.danhSachTaiKhoan;
      return { ...state };
    }

    case DANH_SACH_BINH_LUAN: {
      state.danhSachBinhLuan = action.danhSachBinhLuan;
      return { ...state };
    }




    
 
    default:
      return { ...state };
  }
};
