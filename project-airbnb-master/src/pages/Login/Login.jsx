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
    <div
      id="Login"
      className="d-flex justify-content-center align-items-center py-5 text-white col-12 col-md-6"
    >
      <form className="w-75 form" onSubmit={formik.handleSubmit}>
        <div>
          <div className="text-center">
            <NavLink to="/home" title="Back to homepage">
              <h1 style={{ fontSize: "60px", color: "white" }}>
                airbnb
              </h1>
            </NavLink>
          </div>
        </div>
        <div>
          <h2 className="text-white my-5">Login</h2>
          <div>
            <div>
              <div className="form-group">
                <div className="input-group">
                  <label htmlFor="email" className="input-group-text w-25">
                    Account
                  </label>

                  <Input
                    className="form-control"
                    type="email"
                    placeholder="Please enter your account"
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
                <div className="d-flex justify-content-end mt-2 mb-2">
                  <a href="#" title="Click to retrieve password">
                    Forgot password ?
                  </a>
                </div>
                <div className="input-group">
                  <label htmlFor="password" className="input-group-text w-25">
                    Password
                  </label>
                  <Input.Password
                    className="form-control"
                    type="password"
                    placeholder="Please enter your password"
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
                  Sign in
                </button>
              </div>
            </div>
            <div className="text-center d-sm-flex justify-content-center">
              <p className="mr-sm-3 h6">Do not have an account ?</p>
              <NavLink
                className="font-weight-bold h6"
                to="/register"
                title="Click to register an account"
              >
                Register
              </NavLink>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
