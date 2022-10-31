import { useDispatch, useSelector } from "react-redux";
import React, { memo, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Form, Input, Radio, Select, DatePicker } from "antd";
import { useFormik } from "formik";
import { Option } from "antd/lib/mentions";
import moment from "moment";
import {
  capNhatThongTinNguoiDungAction,
  layThongTinChiTietNguoiDungAction,
} from "../../../../redux/actions/QuanLyNguoiDungAction";

const EditAccount = (props) => {
  const { thongTinChiTietNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );

  const [componentSize, setComponentSize] = useState("default");

  const dispatch = useDispatch();

  let { id } = props.match.params;

  useEffect(() => {
    const action = layThongTinChiTietNguoiDungAction(id)    
    dispatch(action); 
  }, []);

  const formik = useFormik({
    //Để xét dữ liệu mặc định cho formik từ props của redux phải bật thuộc tính enableReinitialize, thuộc tính này thường chỉ làm làm cho form edit, ko đụngchạm state khác
    enableReinitialize: true,

    initialValues: {
      _id: thongTinChiTietNguoiDung?._id,
      role: thongTinChiTietNguoiDung?.role,
      email: thongTinChiTietNguoiDung?.email,
      password: thongTinChiTietNguoiDung?.password,
      name: thongTinChiTietNguoiDung?.name,
      phone: thongTinChiTietNguoiDung?.phone,
      gender: thongTinChiTietNguoiDung?.gender,
      birthday: thongTinChiTietNguoiDung?.birthday,
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

  const onRoleChange = (value) => {
    formik.setFieldValue("role", value);
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
        <h3 className="mb-5">Edit account</h3>
        <Form.Item label="Size" name="size" className="font-weight-bold">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Medium</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Email" className="font-weight-bold mb-2">
          <div className="d-flex justify-content-between font-weight-normal">
            {formik.values.email}
            <div className="text-danger font-italic">Can't change Email</div>
          </div>{" "}
        </Form.Item>
        <Form.Item label="ID" className="font-weight-bold mb-2">
          <div className="d-flex justify-content-between font-weight-normal">
            {formik.values._id}
            <div className="text-danger font-italic">Can't change ID</div>
          </div>{" "}
        </Form.Item>
        <Form.Item label="Role" className="font-weight-bold mb-2">
          <Select
            placeholder="Select role"
            className="font-weight-normal"
            onChange={onRoleChange}
            value={formik.values.role}
            allowClear
          >
            <Option value="ADMIN">Admin</Option>
            <Option value="CLIENT">Client</Option>
          </Select>{" "}
        </Form.Item>
        {/* <Form.Item label="Password" className="font-weight-bold mb-2">
          <Input.Password
            name="password"
            onChange={formik.handleChange}
          />
        </Form.Item> */}
        <Form.Item label="Name" className="font-weight-bold mb-2">
          <Input
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </Form.Item>
        <Form.Item label="Phone" className="font-weight-bold mb-2">
          <Input
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
        </Form.Item>

        <Form.Item label="Gender" className="font-weight-bold mb-2">
          <Select
            placeholder="Select gender"
            className="font-weight-normal"
            onChange={onGenderChange}
            value={formik.values.gender}
            allowClear
          >
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
          <button title="Click to Update" type="submit">
            Update
          </button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default memo(EditAccount);
