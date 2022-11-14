import { useDispatch, useSelector } from "react-redux";
import React, { memo, useEffect, useState } from "react";
import { Form, Input } from "antd";
import { useFormik } from "formik";
import {
  capNhatHinhAnhPhongAction,
  capNhatThongTinPhongAction,
  layThongTinChiTietPhongAction,
} from "../../../../redux/actions/QuanLyPhongAction";

const UpdateImage = (props) => {
  // Dùng để hiển thị hình ảnh khi cập nhật file
  const [imgSrc, setImgSrc] = useState("");

  const { thongTinChiTietPhong } = useSelector(
    (state) => state.QuanLyPhongReducer
  );

  useEffect(() => {
    const { id } = props.match.params;
    const action = layThongTinChiTietPhongAction(id);
    dispatch(action);
  }, []);

  const dispatch = useDispatch();

  const formik = useFormik({
    //Để xét dữ liệu mặc định cho formik từ props của redux phải bật thuộc tính enableReinitialize, thuộc tính này thường chỉ làm làm cho form edit, ko đụngchạm state khác
    enableReinitialize: true,

    initialValues: {
      image: thongTinChiTietPhong?.image,
    },
    onSubmit: (values) => {
      const { id } = props.match.params;
      const formData = new FormData();
      formData.append('room', values.image);
      dispatch(capNhatHinhAnhPhongAction(id, formData));
    },
  });

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
      formik.setFieldValue("image", file);

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
          size: "large",
        }}
        size="large"
      >
        <h3 className="mb-5">Update image room</h3>
        <Form.Item label="">
          <button title="Click to update" type="submit">
            Update
          </button>
        </Form.Item>

        <Form.Item label="Job image" className="font-weight-bold">
          <input
            type="file"
            className="mb-4"
            onChange={handleChangeFile}
            accept="image/png, image/jpeg, image/jpg"
          />
          <div
            style={{
              width: "100%",
              height: "250px",
              backgroundImage: `url(${imgSrc ? imgSrc : formik.values.image}`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "left",
              marginTop: "30px",
            }}
          ></div>
        </Form.Item>
      </Form>
    </section>
  );
};

export default memo(UpdateImage);
