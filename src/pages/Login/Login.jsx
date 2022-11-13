import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { ErrorMessage, useFormik } from "formik";
import { Input } from "antd";
import "./Login.scss";
import * as yup from "yup";
import { dangNhapAction } from "../../redux/actions/QuanLyNguoiDungAction";
import { USER_LOGIN } from "../../util/config";
import HeaderNotForHomePage from "../../_Component/Header/HeaderNotForHomePage";
import Footer from "../../_Component/Footer/Footer";
export default function Login(props) {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Account is required")
      .email("Must be a valid email"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      const action = dangNhapAction(values);
      dispatch(action);
    },
  }); //formik đã xử lý luôn e.preventDefault();

  // Kiểm tra xem nếu đã đăng nhập rồi mà nhập đường dẫn login thì sẽ quay về trang chủ
  if (localStorage.getItem(USER_LOGIN)) {
    alert("You are already logged in");
    return <Redirect to="/home" />;
  }

  return (
    <div className="login-header">
      <HeaderNotForHomePage className="headernotforhomepage" />
      <div className="login-content">
        <div
          id="Login"
          className="d-flex justify-content-center align-items-center py-5  col-12 col-md-6"
        >
          <form className="w-75 form" onSubmit={formik.handleSubmit}>
            <div>
              <div className="text-center">
                <NavLink to="/home" title="Back to homepage">
                  <h1
                    style={{
                      fontSize: "24px",
                      color: "#404145",
                      lineHeight: "130%",
                    }}
                  >
                    Sign in to friverr
                  </h1>
                </NavLink>
              </div>
              <div className="mb-5 mt-4 text-center">
                <button
                  className="btn btn-primary d-flex justify-content-center align-items-center w-100 font-weight-bold"
                  title="Click to login"
                  type="submit"
                >
                  <i className="fab fa-facebook" style={{textAlign:'left', font:'10px'}}></i>  Continue with Facebook
                 
                </button>
              </div>
              <div className="mb-5 mt-4 text-center">
                <button
                  style={{ backgroundColor: "#d5d4d2" }}
                  className="btn d-flex justify-content-center align-items-center w-100 font-weight-bold "
                  title="Click to login"
                  type="submit"
                >
                  <i className="fab fa-google style={{ textAlign:'left', font:'10px'}}"></i>  Continue with Google
                 
                </button>
              </div>
              <div className="mb-5 mt-4 text-center fa-brands fa-square-facebook">
                <button
                  style={{ backgroundColor: "#d5d4d2" }}
                  className="btn d-flex justify-content-center align-items-center w-100 font-weight-bold"
                  title="Click to login"
                  type="submit"
                      >
                  <i className="fab fa-apple" style={{ textAlign:'left', font:'10px'}}></i>  Continue with Apple
                 
                </button>
              </div>
            </div>

            <div>
              <div>
                <div>
                  <div className="form-group">
                    <div className="input-group">
                      <Input
                        className="form-control"
                        type="email"
                        placeholder="Email/ Username"
                        name="email"
                        id="email"
                        onChange={formik.handleChange}
                      />
                    </div>

                    <div className="text-danger mt-2">
                      {formik.errors.email ? (
                        formik.errors.email
                      ) : (
                        <div style={{ visibility: "hidden" }}>1</div>
                      )}
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <Input.Password
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="password"
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div className="text-danger mt-2">
                      {formik.errors.password ? (
                        formik.errors.password
                      ) : (
                        <div style={{ visibility: "hidden" }}>1</div>
                      )}
                    </div>
                  </div>
                  <div className="mb-5 mt-4 text-center">
                    <button
                      className="btn btn-primary w-100 font-weight-bold"
                      title="Click to login"
                      type="submit"
                    >
                      Continue
                    </button>
                  </div>
                  <div className="text-center d-sm-flex justify-content-center">
                    <div className=" mt-2 mb-2 forgot-password">
                      <a href="#" title="Click to retrieve password">
                        Remember Me
                      </a>
                    </div>
                    <div className="mt-2 mb-2 keyword">
                      <a href="#" title="Click to retrieve password">
                        Forgot password ?
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-center d-sm-flex justify-content-center">
                  <p className="mr-sm-3 h6">Not a member yet?</p>
                  <NavLink
                    className="font-weight-bold h6"
                    to="/register"
                    title="Click to register an account"
                  >
                    Join now
                  </NavLink>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
