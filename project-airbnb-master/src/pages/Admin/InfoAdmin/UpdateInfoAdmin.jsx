import { useDispatch, useSelector } from "react-redux";
import React, { memo, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Form, Input, Radio, Select, DatePicker } from "antd";
import { useFormik } from "formik";
import { capNhatThongTinNguoiDungAction, layThongTinChiTietNguoiDungAction } from "../../../redux/actions/QuanLyNguoiDungAction";
import "./UpdateInfoAdmin.scss";
import { Option } from "antd/lib/mentions";
import moment from "moment";

const UpdateInfoAdmin = (props) => {
  const [componentSize, setComponentSize] = useState("default");

  const { userLogin, thongTinChiTietNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );

  const dispatch = useDispatch();
  
  // useEffect(() => {
  //   const action = layThongTinChiTietNguoiDungAction(userLogin._id);
  //   dispatch(action);
  // }, []);

  const formik = useFormik({
    //Để xét dữ liệu mặc định cho formik từ props của redux phải bật thuộc tính enableReinitialize, thuộc tính này thường chỉ làm làm cho form edit, ko đụngchạm state khác
    enableReinitialize: true,

    initialValues: {
      role: thongTinChiTietNguoiDung?.role,
      _id: thongTinChiTietNguoiDung?._id,
      password: thongTinChiTietNguoiDung?.password,
      email: thongTinChiTietNguoiDung?.email,
      name: thongTinChiTietNguoiDung?.name,
      birthday: thongTinChiTietNguoiDung?.birthday,
      phone: thongTinChiTietNguoiDung?.phone,
      gender: thongTinChiTietNguoiDung?.gender,
    },
    onSubmit: (values) => {
      const action = capNhatThongTinNguoiDungAction(values._id, values);
      dispatch(action);
    },
  });

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  //  Set lại định dạng ngày tháng
  const handleChangeDatePicker = (value) => {
    let birthday = moment(value);
    formik.setFieldValue("birthday", birthday);
  };

  const onGenderChange = (value) => {
    formik.setFieldValue("gender", value);
  };

  return (
    <section id="update-info-admin">
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 13,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <h3 className="mb-5">Update information</h3>
        <Form.Item label="Size" name="size" className="font-weight-bold">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Medium</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Role" className="font-weight-bold mb-0">
          <div className="d-flex justify-content-between font-weight-normal">
            {formik.values.role}
            <div className="text-danger font-italic">Can't change role</div>
          </div>
        </Form.Item>

        <Form.Item label="ID" className="font-weight-bold mb-0">
          <div className="d-flex justify-content-between font-weight-normal">
            {formik.values._id}
            <div className="text-danger font-italic">Can't change ID</div>
          </div>
        </Form.Item>
        {/* <Form.Item label="Password">
      <div className="d-flex justify-content-between">
          {formik.values.password}
          <div className="text-danger">
            Can't change password
          </div>
        </div>
      </Form.Item> */}
        <Form.Item label="Email" className="font-weight-bold mb-0">
          <div className="d-flex justify-content-between font-weight-normal">
            {formik.values.email}
            <div className="text-danger font-italic">Can't change Email</div>
          </div>
        </Form.Item>
        <Form.Item label="Name" className="font-weight-bold mb-0">
          <Input
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </Form.Item>
        <Form.Item label="Phone" className="font-weight-bold mb-0">
          <Input
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
        </Form.Item>
        <Form.Item label="Gender" className="font-weight-bold mb-0">
          <Select placeholder="Select gender" onChange={onGenderChange} value={formik.values.gender} allowClear>
            <Option value={true}>Male</Option>
            <Option value={false}>Female</Option>
          </Select>{" "}
        </Form.Item>
        <Form.Item label="Birthday" className="font-weight-bold mb-4">
          <DatePicker
            format={"DD/MM/YYYY"}
            value={moment(formik.values.birthday)}
            onChange={handleChangeDatePicker}
          />
        </Form.Item>

        <Form.Item label=":">
          <button title="Click to update" type="submit">
            Update
          </button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default memo(UpdateInfoAdmin);
