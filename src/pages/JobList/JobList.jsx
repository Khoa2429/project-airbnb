import {
  PRO_SERVICES,
  LOCAL_SELLERS,
  ONLINE_SELLERS,
} from "../../redux/types";
import { layDanhSachCongViecAction } from "../../redux/actions/QuanLyCongViecAction";
import HeaderNotForHomePage from "../../_Component/Header/HeaderNotForHomePage";
import Suggested from "../../_Component/Suggested/Suggested";
import React, { Fragment, useEffect, useState } from "react";
import { StarFilled, HeartFilled } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Form, Switch, Pagination } from "antd";
import { NavLink } from "react-router-dom";
import "./JobList.scss";

export default function JobList(props) {
  const { danhSachCongViec } = useSelector(
    (state) => state.QuanLyCongViecReducer
  );

  const danhSachCongViecFilters = danhSachCongViec.filter(
    (job) => job.image && job.name && job.rating && job.price
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layDanhSachCongViecAction());
  }, []);

  const [test, setTest] = useState(false)
  console.log(test, 'ádasdasdasdasd')
  return (
    <section>
      <HeaderNotForHomePage />
      <Suggested />
      <Fragment>
        <div id="JobList" className={test === true ? 'active' : ''}>
          <div className="container">
            <div className="joblist__reset">
              <button
                className="btn btn-success"
                title="Click to relay list jobs"
                onClick={() => {
                  // window.location.reload();
                  setTest(!test)
                }}
              >
                Relay
              </button>
            </div>

            <div className="joblist__filter">
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
              {danhSachCongViecFilters.length.toLocaleString()} services
              available
            </h1>

            <div className="joblist__list d-flex">
              {danhSachCongViecFilters.slice(0, 20).map((item, index) => {
                return (
                  <Fragment key={index}>
                    <NavLink
                      to={`/jobdetail/${item._id}`}
                      title="Detail"
                      className="joblist-item"
                    >
                      <div className="card">
                        <div className="joblist-img">
                          <img src={item.image} alt="job-list-img" />
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
                total={danhSachCongViecFilters.length}
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
