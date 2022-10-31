import { useDispatch, useSelector } from "react-redux";
import React, { memo, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Form,
  Input,
  Radio,
  Select,
  DatePicker,
  InputNumber,
  Switch,
} from "antd";
import { useFormik } from "formik";
import moment from "moment";
import { taoCongViecMoiAction } from "../../../../redux/actions/QuanLyCongViecAction";
import TextArea from "antd/lib/input/TextArea";

const AddNewJob = (props) => {
  const [componentSize, setComponentSize] = useState("default");

  // Dùng để hiển thị hình ảnh khi cập nhật file
  const [imgSrc, setImgSrc] = useState("");

  const dispatch = useDispatch();

  const formik = useFormik({
    //Để xét dữ liệu mặc định cho formik từ props của redux phải bật thuộc tính enableReinitialize, thuộc tính này thường chỉ làm làm cho form edit, ko đụngchạm state khác
    enableReinitialize: true,

    initialValues: {
      name: "",
      rating: 1,
      price: 1,
      proServices: false,
      localSellers: false,
      onlineSellers: false,
      deliveryTime: false,
      image: "",  
    },
    onSubmit: (values) => {
      // console.log(values);
      const action = taoCongViecMoiAction(values);
      dispatch(action);
    },
  });

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  // Dùng cho nút radio
  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  // Dùng để up dạng file
  const handleChangeFile = (e) => {
    // Lấy file từ e ra ([0] là chỉ lấy file đầu tiên)
    let file = e.target.files[0];
    // Set định dạng ảnh đầu vào
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/png"
    ) {
      // Tạo đối tượng để đọc file
      // FileReader() cú pháp của JS
      let reader = new FileReader();
      // Đọc file
      reader.readAsDataURL(file);
      // Đọc file và trả ra kết quả ở dạng base64// e.target.result là kết quả trả về sau khi đọc file
      reader.onload = (e) => {
        // console.log("e.target.result", e.target.result);
        setImgSrc(e.target.result);
      };
      // Đem dữ liệu file vào formik
      formik.setFieldValue("hinhAnh", file);

      // Set validation
      // formik.setErrors()
    }
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
        <h3 className="mb-5">Create new job</h3>
        <Form.Item label="Size" name="size" className="font-weight-bold">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Medium</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Job name" className="font-weight-bold mb-2">
          <TextArea
            name="name"
            placeholder="Enter job name"
            onChange={formik.handleChange}
          />
        </Form.Item>

        <Form.Item label="Rating" className="font-weight-bold mb-2">
          <InputNumber
            onChange={(value) => {
              formik.setFieldValue("rating", value);
            }}
            placeholder="1 to 10"
            min={1}
            max={10}
          />{" "}
        </Form.Item>

        <Form.Item label="Price" className="font-weight-bold mb-2">
          <InputNumber
            onChange={(value) => {
              formik.setFieldValue("price", value);
            }}
            placeholder="From 1"
            min={0}
          />{" "}
        </Form.Item>

        <Form.Item
          label="ProServices"
          className="font-weight-bold mb-2"
          valuePropName="checked"
        >
          <Switch
            name="proServices"
            onChange={handleChangeSwitch("proServices")}
          />
        </Form.Item>
        <Form.Item
          label="Local Sellers"
          className="font-weight-bold mb-2"
          valuePropName="checked"
        >
          <Switch
            name="localSellers"
            onChange={handleChangeSwitch("localSellers")}
          />
        </Form.Item>
        <Form.Item
          label="Online Sellers"
          className="font-weight-bold mb-2"
          valuePropName="checked"
        >
          <Switch
            name="onlineSellers"
            onChange={handleChangeSwitch("onlineSellers")}
          />
        </Form.Item>
        <Form.Item
          label="Delivery Time"
          className="font-weight-bold mb-2"
          valuePropName="checked"
        >
          <Switch
            name="deliveryTime"
            onChange={handleChangeSwitch("deliveryTime")}
          />
        </Form.Item>

        <Form.Item
          label="Job image"
          className="font-weight-bold position-relative"
        >
          <input
            type="file"
            onChange={handleChangeFile}
            accept="image/png, image/jpeg, image/jpg"
          />
          <Input name="image" onChange={formik.handleChange} placeholder="Enter link image"/> <br />
          <div
            style={{
              width: "300px",
              height: "200px",
              backgroundImage: `url(${imgSrc ? imgSrc : formik.values.image}`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPositionX:"right",
              position: "absolute",
              right: "0",
              bottom: "50px",
            }}
          ></div>
        </Form.Item>

        <Form.Item label=":">
          <button title="Click to create" type="submit">
            Create
          </button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default memo(AddNewJob);
