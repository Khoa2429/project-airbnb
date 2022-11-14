import {
  PRO_SERVICES,
  LOCAL_SELLERS,
  ONLINE_SELLERS,
} from "../../redux/types";
import { layDanhSachPhongAction } from "../../redux/actions/QuanLyPhongAction";
import HeaderNotForHomePage from "../../_Component/Header/HeaderNotForHomePage";
import Suggested from "../../_Component/Suggested/Suggested";
import React, { Fragment, useEffect, useState } from "react";
import { StarFilled, HeartFilled } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Form, Switch, Pagination } from "antd";
import { NavLink } from "react-router-dom";
import "./RoomList.scss";

export default function RoomList(props) {
  const { danhSachPhong } = useSelector(
    (state) => state.QuanLyPhongReducer
  );

  const danhSachPhongFilters = danhSachPhong.filter(
    (room) => room.image && room.name && room.rating && room.price
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layDanhSachPhongAction());
  }, []);

  return (
    <section>
      <HeaderNotForHomePage />
      <Suggested />
      <Fragment>
        <div id="RoomList">
          <div className="container">
            <div className="roomlist__reset">
              <button
                className="btn btn-success"
                title="Click to relay list rooms"
                onClick={() => {
                  window.location.reload();
                }}
              >
                Relay
              </button>
            </div>

            <div className="roomlist__filter">
              <Form className="filter-box">
                <Form.Item label="Pro services" className="filter-button">
                  <Switch
                    name="proServices"
                    onChange={() => {
                      dispatch({ type: PRO_SERVICES });
                    }}
                  />
                </Form.Item>
                <Form.Item label="Local sellers" className="filter-button">
                  <Switch
                    name="localSellers"
                    onChange={() => {
                      dispatch({ type: LOCAL_SELLERS });
                    }}
                  />
                </Form.Item>
                <Form.Item label="Online sellers" className="filter-button">
                  <Switch
                    name="onlineSellers"
                    onChange={() => {
                      dispatch({ type: ONLINE_SELLERS });
                    }}
                  />
                </Form.Item>
              </Form>
            </div>

            <h1 className="services-available">
              {danhSachPhongFilters.length.toLocaleString()} services
              available
            </h1>

            <div className="roomlist__list d-flex">
              {danhSachPhongFilters.slice(0, 20).map((item, index) => {
                return (
                  <Fragment key={index}>
                    <NavLink
                      to={`/roomdetail/${item._id}`}
                      title="Detail"
                      className="roomlist-item"
                    >
                      <div className="card">
                        <div className="roomlist-img">
                          <img src={item.image} alt="room-list-img" />
                        </div>
                        <div className="card-body">
                          <div className="mb-2">
                            {" "}
                            {item.name.length > 50 ? (
                              <h1>{item.name.slice(0, 50)}...</h1>
                            ) : (
                              <h1>{item.name}</h1>
                            )}
                          </div>
                          <p>
                            <StarFilled className="start" /> {item.rating}
                          </p>
                        </div>
                        <div className="card-footer">
                          <p>
                            <HeartFilled className="heart" /> STARTING AT $
                            {item.price}
                          </p>
                        </div>
                      </div>
                    </NavLink>
                  </Fragment>
                );
              })}
            </div>
            <div className="d-flex justify-content-center mt-4">
              <Pagination
                total={danhSachPhongFilters.length}
                defaultCurrent={1}
                showSizeChanger={true}
                showQuickJumper
                showTotal={(total) => `Total ${total}`}
              />
            </div>
          </div>
        </div>
      </Fragment>
    </section>
  );
}
