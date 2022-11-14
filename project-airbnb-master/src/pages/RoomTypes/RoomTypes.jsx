import React from "react";
import { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  layChiTietLoaiPhongAction,
  layThongTinChiTietLoaiPhongAction,
} from "../../redux/actions/QuanLyPhongAction";
import HeaderNotForHomePage from "../../_Component/Header/HeaderNotForHomePage";
import "./RoomTypes.scss";
import { NavLink } from "react-router-dom";
import Suggested from "../../_Component/Suggested/Suggested";

export default function JobTypes(props) {
  const { chiTietLoaiPhong, thongTinChiTietLoaiPhong } =
    useSelector((state) => state.QuanLyPhongReducer);

  const TTCTLP_USE = thongTinChiTietLoaiPhong.subTypeRooms;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layChiTietLoaiPhongAction());
    dispatch(layThongTinChiTietLoaiPhongAction("6198768aaef344001cecfd43"));
  }, []);

  return (
    <section>
      <HeaderNotForHomePage />
      <Suggested />
      <div id="roomTypes">
        <div className="roomTypes__header">
          <div className="container">
            {thongTinChiTietLoaiPhong.name ? (
              <h1 className="title">{thongTinChiTietLoaiPhong.name}</h1>
            ) : (
              <h1 className="title" style={{ visibility: "hidden" }}>
                A
              </h1>
            )}
            <p>
              Get all the technical belts and whistles without paying for a
              programing degree
            </p>
            <span>
              <i className="fa fa-play-circle"></i>How Airbnb Works
            </span>
          </div>
        </div>

        <div className="roomTypes__main">
          <div className="container">
            <div className="roomTypes__main__name">
              <ul>
                {chiTietLoaiPhong.map((typeRoom, index) => {
                  return (
                    <li key={index}>
                      <button
                        title={typeRoom.name}
                        onClick={() => {
                          dispatch(
                            layThongTinChiTietLoaiPhongAction(
                              typeRoom._id
                            )
                          );
                        }}
                      >
                        {index + 1}. {typeRoom.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="roomTypes__main__detail">
              {TTCTLP_USE?.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <NavLink
                      to={`/roomlist`}
                      title={item.name}
                      className="roomtype-item"
                    >
                      <div className="card">
                        <div className="card-body">
                          <div className="roomtype-img">
                            {item.image ? (
                              <img src={item.image} alt="room-type-img" />
                            ) : (
                              <img
                                src="http://picsum.photos/1000"
                                alt="room-type-img"
                              />
                            )}
                          </div>
                          <div className="roomtype-name">
                            <h1>{item.name}</h1>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>

        <div className="roomTypes__footer">
          <div className="container">
            <div className="item">
              <h1>
                Your <span>Terms</span>
              </h1>
              <p>
                Whatever you need to simplly your to do list, no matter your
                budget
              </p>
            </div>
            <div className="item">
              <h1>
                Your <span>Timeline</span>
              </h1>
              <p>
                Find services based on your goals and deadlines, It's that
                simple
              </p>
            </div>
            <div className="item">
              <h1>
                Your <span>Safety</span>
              </h1>
              <p>
                Your payment is always secure, Fiverr is bullt to protect your
                peace of mind
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
