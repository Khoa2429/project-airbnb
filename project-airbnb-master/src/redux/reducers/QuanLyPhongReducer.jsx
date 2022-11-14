import { DANH_SACH_PHONG_HOAN_THANH_STORAGE } from "../../util/config";
import {
  LAY_DANH_SACH_PHONG_THEO_TEN_PHONG_ACTION,
  LAY_THONG_TIN_CHI_TIET_LOAI_PHONG,
  LAY_CHI_TIET_LOAI_PHONG_ACTION,
  LAY_THONG_TIN_CHI_TIET_PHONG,
  LAY_DANH_SACH_PHONG_ACTION,
  ONLINE_SELLERS,
  LOCAL_SELLERS,
  PRO_SERVICES,
  FINISH_ROOM,
  ROOM_NAME_SEARCH,
  POPULAR_SERVICES,
} from "../types";

let DSCVHTLocalStorage = [];
if (localStorage.getItem(DANH_SACH_PHONG_HOAN_THANH_STORAGE)) {
  DSCVHTLocalStorage = JSON.parse(
    localStorage.getItem(DANH_SACH_PHONG_HOAN_THANH_STORAGE)
  );
}

const stateDefault = {
  // Api 14
  chiTietLoaiPhong: [],
  // Api 17
  thongTinChiTietLoaiPhong: [],
  // Api 20
  danhSachPhong: [],
  danhSachPhongFilter: [],
  danhSachPhongDefault: [],
  // Api 23
  thongTinChiTietPhong: [],
  // Api 28
  danhSachPhongDaHoanThanh: DSCVHTLocalStorage,
  // Api 29
  danhSachPhongTheoTenPhong: [],
  danhSachPhongTheoTenPhongFilter: [],
  // Filter room
  proServices: false,
  localSellers: false,
  onlineSellers: false,
  // Search room
  tuKhoaTimKiem: "",
};

export const QuanLyPhongReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LAY_CHI_TIET_LOAI_PHONG_ACTION: {
      state.chiTietLoaiPhong = action.chiTietLoaiPhong.filter(
        (item) => item.subTypeRooms.length > 0
      );
      return { ...state };
    }

    case LAY_DANH_SACH_PHONG_ACTION: {
      // Có nhiều room rác bị thêm vào nên phải lọc ra
      state.danhSachPhong = action.danhSachPhong;
      state.danhSachPhongDefault = action.danhSachPhong;
      return { ...state };
    }

    case LAY_DANH_SACH_PHONG_THEO_TEN_PHONG_ACTION: {
      // Có nhiều room rác bị thêm vào nên phải lọc ra
      state.danhSachPhongTheoTenPhong =
        action.danhSachPhongTheoTenPhong;
      return { ...state };
    }

    case LAY_THONG_TIN_CHI_TIET_PHONG: {
      state.thongTinChiTietPhong = action.thongTinChiTietPhong;
      return { ...state };
    }

    case PRO_SERVICES: {
      state.proServices = !state.proServices;
      if (state.proServices === true) {
        state.danhSachPhongFilter = state.danhSachPhong.filter(
          (room) => room.proServices === state.proServices
        );
        state.danhSachPhong = state.danhSachPhongFilter;

        state.danhSachPhongTheoTenPhongFilter =
          state.danhSachPhongTheoTenPhong.filter(
            (room) => room.proServices === state.proServices
          );
        state.danhSachPhongTheoTenPhong =
          state.danhSachPhongTheoTenPhongFilter;
      }
      return { ...state };
    }

    case LOCAL_SELLERS: {
      state.localSellers = !state.localSellers;
      if (state.localSellers === true) {
        state.danhSachPhongFilter = state.danhSachPhong.filter(
          (room) => room.localSellers === state.localSellers
        );
        state.danhSachPhong = state.danhSachPhongFilter;

        state.danhSachPhongTheoTenPhongFilter =
          state.danhSachPhongTheoTenPhong.filter(
            (room) => room.localSellers === state.localSellers
          );
        state.danhSachPhongTheoTenPhong =
          state.danhSachPhongTheoTenPhongFilter;
      }
      return { ...state };
    }

    case ONLINE_SELLERS: {
      state.onlineSellers = !state.onlineSellers;
      if (state.onlineSellers === true) {
        state.danhSachPhongFilter = state.danhSachPhong.filter(
          (room) => room.onlineSellers === state.onlineSellers
        );
        state.danhSachPhong = state.danhSachPhongFilter;

        state.danhSachPhongTheoTenPhongFilter =
          state.danhSachPhongTheoTenPhong.filter(
            (room) => room.onlineSellers === state.onlineSellers
          );
        state.danhSachPhongTheoTenPhong =
          state.danhSachPhongTheoTenPhongFilter;
      }
      return { ...state };
    }

    case FINISH_ROOM: {
      state.danhSachPhongDaHoanThanh.push(action.PhongDaHoanThanh);
      localStorage.setItem(
        DANH_SACH_PHONG_HOAN_THANH_STORAGE,
        JSON.stringify(state.danhSachPhongDaHoanThanh)
      );
      return { ...state };
    }

    case LAY_THONG_TIN_CHI_TIET_LOAI_PHONG: {
      state.thongTinChiTietLoaiPhong =
        action.thongTinChiTietLoaiPhong;
      return { ...state };
    }

    case ROOM_NAME_SEARCH: {
      state.tuKhoaTimKiem = action.chuNguoiDungNhap;
      return { ...state };
    }

    case POPULAR_SERVICES: {
      state.tuKhoaTimKiem = action.phongPhoBien;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
