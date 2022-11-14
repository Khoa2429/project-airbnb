import {
  datPhongAction,
  layThongTinChiTietPhongAction,
} from "../../redux/actions/QuanLyPhongAction";
import {
  taoBinhLuanAction,
  danhSachBinhLuanAction,
} from "../../redux/actions/QuanLyNguoiDungAction";
import HeaderNotForHomePage from "../../_Component/Header/HeaderNotForHomePage";
import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, Fragment } from "react";
import { Input, Rate } from "antd";
import { useFormik } from "formik";
import { useState } from "react";
import "./RoomDetail.scss";

export default function RoomDetail(props) {
  const [like, setLike] = useState("");
  const [disLike, setDisLike] = useState("");

  const { thongTinChiTietPhong, danhSachPhongDaHoanThanh } = useSelector(
    (state) => state.QuanLyPhongReducer
  );

  const { danhSachBinhLuan, thongTinChiTietNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );

  const dispatch = useDispatch();

  let { id } = props.match.params;

  useEffect(() => {
    dispatch(layThongTinChiTietPhongAction(id));
    dispatch(danhSachBinhLuanAction(id));
  }, []);

  const formik = useFormik({
    initialValues: {
      content: "",
      room: id,
    },
    onSubmit: (values) => {
      dispatch(taoBinhLuanAction(values));
    },
  });

  // Kiểm tra xem đã từng hoàn thành phòng này chưa
  const checkFinish = danhSachPhongDaHoanThanh.find(
    (room, index) => room._id === id
  );
  // Kiểm tra xem đã từng đặt phòng này chưa
  const checkBooked = thongTinChiTietNguoiDung.bookingRoom?.find(
    (item, index) => item === id
  );

  return (
    <section id="roomDetail">
      <HeaderNotForHomePage />
      <div className="roomDetail__main">
        <div className="container">
          <div className="info-room">
            <div className="card">
              <div className="card-header">
                <h1 className="title">{thongTinChiTietPhong.name}</h1>
                <p>
                  <i className="fab fa-galactic-senate"></i>Buying keep
                  returning!{" "}
                  <span>
                    nofilrazzaq has an exceptional number of repeat buyers
                  </span>
                </p>
              </div>
              <div className="card-body">
                <Rate
                  class="rating"
                  value={thongTinChiTietPhong.rating}
                  count={10}
                />
                <h2 className="price">{thongTinChiTietPhong.price}$</h2>
                <div className="img-info">
                  <div>
                    <img
                      src={thongTinChiTietPhong.image}
                      alt="room-image"
                      onError={(e) => {
                        e.target.onError = null;
                        e.target.src = `http://picsum.photos/1000`;
                      }}
                    />
                  </div>
                  <ul>
                    {thongTinChiTietPhong.proServices === true ? (
                      <li className="text-success">
                        <i className="fa fa-check-circle"></i>Pro Services
                      </li>
                    ) : (
                      <li className="text-danger">
                        <i className="fa fa-times-circle"></i>Pro Services
                      </li>
                    )}
                    {thongTinChiTietPhong.localSellers === true ? (
                      <li className="text-success">
                        <i className="fa fa-check-circle"></i>Local Sellers
                      </li>
                    ) : (
                      <li className="text-danger">
                        <i className="fa fa-times-circle"></i>Local Sellers
                      </li>
                    )}
                    {thongTinChiTietPhong.onlineSellers === true ? (
                      <li className="text-success">
                        <i className="fa fa-check-circle"></i>Online Sellers
                      </li>
                    ) : (
                      <li className="text-danger">
                        <i className="fa fa-times-circle"></i>Online Sellers
                      </li>
                    )}
                    {thongTinChiTietPhong.deliveryTime === true ? (
                      <li className="text-success">
                        <i className="fa fa-check-circle"></i>Delivery Time
                      </li>
                    ) : (
                      <li className="text-danger">
                        <i className="fa fa-times-circle"></i>Delivery Time
                      </li>
                    )}
                    {thongTinChiTietPhong.status === true ? (
                      <li className="text-success">
                        <i className="fa fa-check-circle"></i>Status
                      </li>
                    ) : (
                      <li className="text-danger">
                        <i className="fa fa-times-circle"></i>Status
                      </li>
                    )}
                  </ul>
                </div>
                <div className="sub-type">
                  <div>
                    {" "}
                    <img
                      src={
                        thongTinChiTietPhong.subType?.image
                          ? thongTinChiTietPhong.subType.image
                          : "http://picsum.photos/1000"
                      }
                      alt="sub-type-img"
                    />
                  </div>
                  <h1>{thongTinChiTietPhong.subType?.name}</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="booking-room">
            <div className="card card-1">
              <div className="card-header">
                <p title="Basic">Basic</p>
                <p title="Standard">Standard</p>
                <p title="Premium">Premium</p>
              </div>
              <div className="card-body">
                <div>
                  <h1>Standard</h1>
                  <p className="font-weight-bold">
                    ${thongTinChiTietPhong.price}
                  </p>
                </div>
                <p style={{ textAlign: "justify" }}>
                  {thongTinChiTietPhong.name}
                </p>
                <h1>
                  <i className="fa fa-clock"></i>30 Days Delivery{" "}
                  <i className="fa fa-sync-alt"></i> 1 Revision
                </h1>
                <ul>
                  <li>
                    <i className="text-success fa fa-check"></i>Design
                    Customization
                  </li>
                  <li>
                    <i className="text-success fa fa-check"></i>Content Upload
                  </li>
                  <li>
                    <i className="text-success fa fa-check"></i>Responsive
                    Design
                  </li>
                  <li>
                    <i className="text-success fa fa-check"></i>Include Source
                    Code
                  </li>
                  <li>
                    <i className="text-success fa fa-check"></i>1 Page
                  </li>
                </ul>
                <button
                  title="Continue"
                  onClick={() => {
                    if (window.confirm("Do you want to book this room?")) {
                      if (
                        checkBooked &&
                        thongTinChiTietPhong.status === false
                      ) {
                        alert("You have already booked this room");
                      } else if (checkFinish) {
                        alert("You have already booked and completed this room");
                      } else {
                        dispatch(datPhongAction(id));
                        window.location.reload();
                      }
                    }
                  }}
                >
                  Continue (${thongTinChiTietPhong.price})
                </button>
                <h2>Compare Packages</h2>
                <div className="d-flex justify-content-center">
                  {checkFinish ? (
                    <h1 className="text-danger text-center mb-0 mt-2">
                      You have already booked and completed this room
                    </h1>
                  ) : checkBooked &&
                    thongTinChiTietPhong.status === false ? (
                    <h1 className="text-danger text-center mb-0 mt-2">
                      You already booked this room
                    </h1>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>

            <div className="card card-2">
              <div className="card-body">
                <h1>Do you have any special requiredments?</h1>
                <button title="Get a Quote">Get a Quote</button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="faq">
          <div className="container">
            <h1>FAQ</h1>
            <ul>
              <li>
                <span>Do you provide regular updates on order?</span>
                <i className="fa fa-chevron-down"></i>
              </li>
              <li>
                <span>
                  How do you guarantee product quality and rellability?
                </span>
                <i className="fa fa-chevron-down"></i>
              </li>
              <li>
                <span>Do you give post-development-support?</span>
                <i className="fa fa-chevron-down"></i>
              </li>
              <li>
                <span>Do you convert PSD to HTML?</span>
                <i className="fa fa-chevron-down"></i>
              </li>
            </ul>
          </div>
        </div> */}
        <div className="comments">
          <div className="container">
            <h1 className="pb-3">{danhSachBinhLuan.length} Review</h1>

            <form className="form comment-form" onSubmit={formik.handleSubmit}>
              <div className="input-group d-flex">
                <Input
                  className="form-control"
                  type="text"
                  placeholder="Enter your comment"
                  name="content"
                  onChange={formik.handleChange}
                />
                <button
                  className="btn btn-primary font-weight-bold"
                  title="Click to comment"
                  type="submit"
                >
                  Comment
                </button>
              </div>
            </form>

            {danhSachBinhLuan.map((comment, index) => {
              return (
                <div className="comment" key={index}>
                  <div className="img-comment">
                    {comment.user ? (
                      <img
                        src={
                          comment.user.avatar
                            ? comment.user.avatar
                            : "http://picsum.photos/1000"
                        }
                        alt="img-comment"
                      />
                    ) : (
                      <div className="img-anonymous"></div>
                    )}
                  </div>
                  <div className="info-comment">
                    {comment.user ? (
                      <h1>{comment.user.name}</h1>
                    ) : (
                      <h1>Anonymous user</h1>
                    )}
                    <h2>{comment.content}</h2>
                    <p className="d-flex align-items-center mt-2">
                      <span className="mr-4">
                        {" "}
                        <LikeOutlined
                          title="Like"
                          className={`mr-2 ${like}`}
                          onClick={() => {
                            if (like === "") {
                              setLike("text-primary");
                            } else {
                              setLike("");
                            }
                          }}
                        />{" "}
                        Helpful
                      </span>
                      <span>
                        {" "}
                        <DislikeOutlined
                          title="DisLike"
                          className={`mr-2 ${disLike}`}
                          onClick={() => {
                            if (disLike === "") {
                              setDisLike("text-danger");
                            } else {
                              setDisLike("");
                            }
                          }}
                        />
                        Not Helpful
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
            <p
              title="See more"
              className="text-success mt-3 font-weight-bold"
              style={{ fontSize: "16px", cursor: "pointer" }}
            >
              See more +
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
