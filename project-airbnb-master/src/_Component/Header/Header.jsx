import {
  layChiTietLoaiPhongAction,
  layDanhSachPhongTheoTenPhongAction,
  layThongTinChiTietLoaiPhongAction,
} from "../../redux/actions/QuanLyPhongAction";
import { layThongTinChiTietNguoiDungAction } from "../../redux/actions/QuanLyNguoiDungAction";
import { useDispatch, useSelector } from "react-redux";
import { Token, USER_LOGIN } from "../../util/config";
import React, { useEffect, Fragment } from "react";
import Search from "antd/lib/transfer/search";
import { NavLink } from "react-router-dom";
import { history } from "../../App";
import { Input } from "antd";
import "./Header.scss";
import _ from "lodash";
import { ROOM_NAME_SEARCH } from "../../redux/types";

export default function Header(props) {
  const { chiTietLoaiPhong } = useSelector(
    (state) => state.QuanLyPhongReducer
  );
  const { userLogin, thongTinChiTietNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layChiTietLoaiPhongAction());
    dispatch(layThongTinChiTietNguoiDungAction(userLogin._id));
  }, []);

  // Trạng thái đăng nhập, nếu chưa đăng nhập thì hiển thị đăng nhập và đăng ký, nếu đã đăng nhập thì hiển thị đăng xuất
  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <div className="navbar-nav ml-auto">
            <NavLink
              className="nav-link pl-2 ml-4 font-weight-bold"
              to="/home"
              title="Home"
            >
              Home
            </NavLink>
            <NavLink
              className="nav-link pl-2 ml-4 font-weight-bold"
              to="/roomtypes"
              title="Rooms type"
            >
              Rooms type
            </NavLink>
            <NavLink
              className="nav-link pl-2 ml-4 font-weight-bold"
              to="/roomlist"
              title="Rooms list"
            >
              Rooms list
            </NavLink>
            <NavLink
              className="nav-link text-left pl-2 ml-4 font-weight-bold "
              to="/login"
              title="Sign in"
            >
              Sign in
            </NavLink>
            <NavLink
              className="nav-link  nav-link-join ml-4 font-weight-bold"
              to="/register"
              title="Join"
            >
              Join
            </NavLink>
          </div>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <div className="navbar-nav ml-auto">
          <NavLink
            className="nav-link pl-2 ml-4 font-weight-bold"
            to="/home"
            title="Home"
          >
            Home
          </NavLink>
          <NavLink
            className="nav-link pl-2 ml-4 font-weight-bold"
            to="/roomtypes"
            title="Rooms type"
          >
            Rooms type
          </NavLink>
          <NavLink
            className="nav-link pl-2 ml-4 font-weight-bold"
            to="/roomlist"
            title="Rooms list"
          >
            Rooms list
          </NavLink>
          <div id="dropdownMenu" className="dropdown ml-4">
            <button
              className="dropdown-toggle nav-link font-weight-bold pl-2"
              style={{ backgroundColor: "transparent", border: "none" }}
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              {thongTinChiTietNguoiDung.name}
            </button>
            <div
              className="dropdown-menu pl-2 pr-2 w-100"
              aria-labelledby="dropdownMenuButton"
            >
              <NavLink
                className="nav-link font-weight-bold"
                to={`/profile/${userLogin._id}`}
                title="Go to the personal page"
              >
                Personal page
              </NavLink>
              <NavLink
                className="nav-link font-weight-bold"
                to="/admin/infoadmin"
                title="Go to the personal page"
              >
                Admin page
              </NavLink>
              <NavLink
                className="nav-link font-weight-bold"
                to="/register"
                title="Register new account"
              >
                Register
              </NavLink>
              <div className="dropdown-divider"></div>
              <div
                className="nav-link font-weight-bold"
                style={{ cursor: "pointer" }}
                title="Click to sign out"
                onClick={() => {
                  if (window.confirm("Are you sure you want to sign out?")) {
                    // Xóa trong localStorage
                    localStorage.removeItem(USER_LOGIN);
                    localStorage.removeItem(Token);
                    // Chuyển hướng về home
                    history.push("/");
                    // Reload lại trang web
                    window.location.reload();
                  }
                }}
              >
                Sign out
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  };

  // // Sticky header
  window.addEventListener("scroll", function () {
    var header = this.document.querySelector("#header");
    header.classList.toggle("sticky", this.window.scrollY > 0);
  });

  const { Search } = Input;

  // Hàm tìm kiếm
  const onSearch = (value) => {
    history.push("/roomlistsearch");
    dispatch({type:ROOM_NAME_SEARCH, chuNguoiDungNhap: value,})
    dispatch(layDanhSachPhongTheoTenPhongAction(value));
  };

  return (
    <header id="header" className="header sticky">
      <main className="header__main">
        <nav className="navbar navbar-expand-md p-0">
          <div className="container">
            <NavLink
              className="navbar-brand font-weight-bold"
              to="/home"
              title="airbnb"
            >
              airbnb
            </NavLink>

            <div className="nav-bar-search input-group-sm">
              <Search
                type="text"
                placeholder="Find services"
                enterButton="Search"
                onSearch={onSearch}
              />
            </div>

            <button
              className="navbar-toggler ml-2"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars text-black border py-2 px-3 rounded"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              {renderLogin()}
            </div>
          </div>
        </nav>
        <div className="room-type">
          <div className="my-container">
            {" "}
            {chiTietLoaiPhong.map((item, index) => {
              return (
                <NavLink
                  key={index}
                  title={item.name}
                  to="/roomtypes"
                  className="navlink-roomtype"
                  onClick={() => {
                    dispatch(
                      layThongTinChiTietLoaiPhongAction(item._id)
                    );
                  }}
                >
                  {item.name}
                </NavLink>
              );
            })}
          </div>
        </div>
      </main>
      <div className="back-to-top">
        <a href="#" title="Back to top">
          <i className="fa fa-angle-up"></i>
        </a>
      </div>
    </header>
  );
}
