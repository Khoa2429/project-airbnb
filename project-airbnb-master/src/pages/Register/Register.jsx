import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { DatePicker, Input, Select } from "antd";
import React from "react";
import "./Register.scss";
import moment from "moment";
import { dangKyTaiKhoanAction } from "../../redux/actions/QuanLyNguoiDungAction";
import { Option } from "antd/lib/mentions";
import * as yup from "yup";

const listSkill = [];
const listCertification = [];

export default function Register(props) {
  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .required("Email is required")
      .email("Must be a valid email"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(16, "Password must not exceed 16 characters"),
    phone: yup
      .string()
      .required("Phone is required")
      .min(10, "Phone must be at least 10 characters")
      .max(12, "Phone must not exceed 12 characters"),
    birthday: yup.string().required("Birthday is required"),
    gender: yup.string().required("Gender is required"),
  });

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: false, // Giới tính true là nam, false là nữ theo backend
      // skill: listSkill,
      // certification: listCertification,
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      // console.log(values);
      dispatch(dangKyTaiKhoanAction(values));
    },
  });

  //  Set lại định dạng ngày tháng
  const handleChangeDatePicker = (value) => {
    let birthday = moment(value);
    formik.setFieldValue("birthday", birthday);
  };

  const onGenderChange = (value) => {
    formik.setFieldValue("gender", value);
  };

  return (
    <div
      id="Register"
      className="d-flex justify-content-center align-items-center py-5 text-white col-12 col-md-6"
    >
      <form className="w-75 form" onSubmit={formik.handleSubmit}>
        <div>
          <div className="text-center">
            <NavLink to="/home" title="Back to homepage">
              <h1 style={{ fontSize: "60px", color: "white" }}>
                friverr
                <i
                  style={{ fontSize: "12px" }}
                  className="fa fa-circle text-success"
                ></i>
              </h1>
            </NavLink>
          </div>
        </div>

        <div>
          <h2 className="text-white my-5">Register</h2>
          <div>
            <div>
              <div className=" mb-0 form-group">
                {" "}
                <div className="input-group">
                  <label htmlFor="name" className="input-group-text w-25">
                    Name
                  </label>
                  <Input
                    className="form-control"
                    type="text"
                    placeholder="Please enter your name"
                    name="name"
                    id="name"
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="text-danger mt-1">
                  {formik.errors.name ? formik.errors.name : ""}
                </div>
              </div>

              <div className="mt-4   mb-0 form-group ">
                <div className="input-group">
                  <label htmlFor="email" className="input-group-text w-25">
                    Email
                  </label>
                  <Input
                    className="form-control"
                    type="email"
                    placeholder="Please enter your email"
                    name="email"
                    id="email"
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="text-danger mt-1">
                  {" "}
                  {formik.errors.email ? formik.errors.email : ""}
                </div>
              </div>

              <div className="mt-4   mb-0 form-group">
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

                <div className="text-danger mt-1">
                  {formik.errors.password ? formik.errors.password : ""}
                </div>
              </div>

              <div className="mt-4   mb-0 form-group">
                <div className="input-group">
                  <label htmlFor="phone" className="input-group-text w-25">
                    Phone
                  </label>
                  <Input
                    className="form-control"
                    type="text"
                    placeholder="Please enter your phone number"
                    name="phone"
                    id="phone"
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="text-danger mt-1">
                  {formik.errors.phone ? formik.errors.phone : ""}
                </div>
              </div>

              <div className="mt-4   mb-0 form-group">
                <div className="input-group">
                  <label className="input-group-text w-25">Birthday</label>

                  <DatePicker
                    onChange={handleChangeDatePicker}
                    className="form-control"
                  />
                </div>

                <div className="text-danger mt-1">
                  {" "}
                  {formik.errors.birthday ? formik.errors.birthday : ""}
                </div>
              </div>

              <div className="mt-4   mb-0 form-group">
                <div className="input-group">
                  <label className="input-group-text w-25">Gender</label>
                  <Select
                    className="form-control"
                    placeholder="Select gender"
                    onChange={onGenderChange}
                    allowClear
                  >
                    <Option value={true}>Male</Option>
                    <Option value={false}>Female</Option>
                  </Select>
                </div>

                <div className="text-danger mt-1">
                  {" "}
                  {formik.errors.gender ? formik.errors.gender : ""}
                </div>
              </div>

              {/* <div className=" mb-0 mt-3   form-group">
                <label htmlFor="skill" id="showSkillScreen">
                  Skill
                </label>
                <div className="input-group">
                  <Input
                    className="form-control"
                    type="text"
                    placeholder="Add your skills"
                    name="skill"
                    id="skill"
                  />
                  <span
                    className="input-group-text"
                    style={{ padding: "4px 10px" }}
                    type="button"
                    id="addSkill"
                    onClick={() => {
                      let skill =
                        document.getElementById("skill").value;
                      let find = listSkill.find((item) => item === skill);
                      if (find === undefined) {
                        listSkill.push(skill);
                      }
                      document.getElementById(
                        "showSkillScreen"
                      ).innerHTML = `Skill: ${listSkill.join(" , ")}`;
                    }}
                  >
                    Add skill
                  </span>
                </div>
              </div>

              <div className=" mb-0 mt-3 form-group">
                {" "}
                <label htmlFor="certification" id="showCertificationScreen">
                  Certification
                </label>
                <div className="input-group">
                  <Input
                    className="form-control"
                    type="text"
                    placeholder="Add your skills"
                    name="certification"
                    id="certification"
                  />
                  <span
                    className="input-group-text"
                    style={{ padding: "4px 10px" }}
                    type="button"
                    id="addCertification"
                    onClick={() => {
                      let certification =
                        document.getElementById("certification").value;
                      let find = listCertification.find(
                        (item) => item === certification
                      );
                      if (find === undefined) {
                        listCertification.push(certification);
                      }
                      document.getElementById(
                        "showCertificationScreen"
                      ).innerHTML = `Certification: ${listCertification.join(
                        " , "
                      )}`;
                    }}
                  >
                    Add certification
                  </span>
                </div>
              </div> */}

              <div className="my-5 text-center">
                <button
                  className="btn btn-primary w-100 font-weight-bold"
                  title="Click to register an account"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <p className="mr-3 h6">Have an account ?</p>
              <NavLink
                className="font-weight-bold h6"
                to="/login"
                title="Click to login an account"
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
