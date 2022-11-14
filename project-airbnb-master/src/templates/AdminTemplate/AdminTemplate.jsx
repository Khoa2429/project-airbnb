import {
  UserOutlined,
  ProfileOutlined,
  AlignLeftOutlined,
  PlusCircleOutlined,
  CodeSandboxOutlined,
} from "@ant-design/icons";
import { ACCESSTOKEN, Token, USER_LOGIN } from "../../util/config";
import { Redirect, Route } from "react-router";
import { Fragment, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../../App";
import { Layout, Menu } from "antd";
import _ from "lodash";
import "./AdminTemplate.scss";
import { layThongTinChiTietNguoiDungAction } from "../../redux/actions/QuanLyNguoiDungAction";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const AdminTemplate = (props) => {
  const { Component, ...restProps } = props; // path, exact, Component

  const { userLogin, thongTinChiTietNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const action = layThongTinChiTietNguoiDungAction(userLogin._id);
    dispatch(action);
  }, []);

  // Chuyển hướng về đầu trang khi trở lại trang trước đó
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  // Kiểm tra trong localStorage nếu chưa đăng nhập thì chuyển về trang login
  if (!localStorage.getItem(USER_LOGIN)) {
    alert("You are not logged in !");
    return <Redirect to="/login" />;
  }

  // // Kiểm tra trong localStorage nếu không phải admin thì chuyển về trang profile
  // if (userLogin.role !== "ADMIN") {
  //   alert("You do not have permission to access this page !");
  //   return <Redirect to="/home" />;
  // }

  // Trạng thái đăng nhập
  const renderLogin = () => {
    return (
      <Fragment>
        <div className="navbar-nav ml-auto">
          <div
            className="sign-out nav-link pl-2 font-weight-bold"
            style={{ cursor: "pointer" }}
            title="Click to sign out"
            onClick={() => {
              if (window.confirm("Are you sure you want to sign out?")) {
                // Xóa trong localStorage
                localStorage.removeItem(USER_LOGIN);
                localStorage.removeItem(Token);
                // Chuyển hướng về home
                history.push("/home");
                // Reload lại trang web
                window.location.reload();
              }
            }}
          >
            Sign out
          </div>
          <div
            className="info-user nav-link text-black pl-2 ml-5 font-weight-bold"
            style={{ cursor: "pointer" }}
            onClick={() => {
              history.push("/home");
            }}
            title="Go to the personal page"
          >
            {userLogin?.name}
            <span>{userLogin.name?.slice(0, 1)}</span>
          </div>
        </div>
      </Fragment>
    );
  };

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        //props.location, props.history, props.match
        return (
          <div id="adminTemplate" className="position-relative">
            <div className="login-info">{renderLogin()}</div>

            <Fragment>
              <Layout style={{ minHeight: "100vh" }}>
                <Sider>
                  <div className="logo-homepage">
                    <NavLink to="/home" title="Back to HomePage">
                      <h1>
                        friverr
                        <i className="fa fa-circle text-success"></i>
                      </h1>
                    </NavLink>
                  </div>

                  <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                    {/* Nếu key giống nhau sẽ sổ ra nội dung bên nhau cùng lúc */}
                    {/* Submenu là dropdown button */}

                    <SubMenu
                      key="1"
                      icon={<UserOutlined />}
                      title="ACCOUNT"
                      className="font-weight-bold"
                    >
                      <Menu.Item key="2" icon={<ProfileOutlined />}>
                        <NavLink
                          to="/admin/infoadmin"
                          style={{ fontWeight: "normal" }}
                        >
                          Admin info
                        </NavLink>
                      </Menu.Item>
                      <Menu.Item key="3" icon={<AlignLeftOutlined />}>
                        <NavLink
                          to="/admin/listaccount"
                          style={{ fontWeight: "normal" }}
                        >
                          List account
                        </NavLink>
                      </Menu.Item>
                      <Menu.Item key="4" icon={<PlusCircleOutlined />}>
                        <NavLink
                          to="/admin/listaccount/addnewaccount"
                          style={{ fontWeight: "normal" }}
                        >
                          Add new account
                        </NavLink>
                      </Menu.Item>
                    </SubMenu>

                    <SubMenu
                      key="1"
                      icon={<CodeSandboxOutlined />}
                      title="ROOM"
                      className="font-weight-bold"
                    >
                      <Menu.Item key="5" icon={<AlignLeftOutlined />}>
                        <NavLink
                          to="/admin/listrooms"
                          style={{ fontWeight: "normal" }}
                        >
                          Rooms list
                        </NavLink>
                      </Menu.Item>
                      <Menu.Item key="6" icon={<PlusCircleOutlined />}>
                        <NavLink
                          to="/admin/listrooms/addnewroom"
                          style={{ fontWeight: "normal" }}
                        >
                          Add new room
                        </NavLink>
                      </Menu.Item>
                    </SubMenu>
                  </Menu>
                </Sider>

                <Layout className="site-layout">
                  <Header
                    className="site-layout-background"
                    style={{ padding: "40px" }}
                  >
                    <div className=""></div>
                  </Header>
                  <Content style={{ margin: 0 }}>
                    {/* Breadcrumb sẽ cho ra những / nhánh */}
                    {/* <Breadcrumb style={{ margin: "16px 0" }}>
                      <Breadcrumb.Item>User</Breadcrumb.Item>
                      <Breadcrumb.Item>Bill</Breadcrumb.Item>
                      <Breadcrumb.Item>Bill2</Breadcrumb.Item>
                      <Breadcrumb.Item>Bill3</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <div
                      className="site-layout-background"
                      style={{
                        paddingTop: 50,
                        paddingLeft: 50,
                        paddingRight: 50,
                      }}
                    >
                      <Component {...propsRoute} />
                    </div>
                  </Content>
                  <Footer
                    style={{ textAlign: "center" }}
                    className="site-layout-background"
                  >
                    {" "}
                    <div className="text-right mr-5">
                      {" "}
                      ©2022 All rights reserved
                    </div>
                  </Footer>
                </Layout>
              </Layout>
            </Fragment>
            <a className="back-to-top" href="#" title="Back to top">
              <i className="fa fa-angle-up"></i>
            </a>
          </div>
        );
      }}
    />
  );
};
