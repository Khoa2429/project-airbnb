import React from "react";
import { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  layChiTietLoaiCongViecChinhAction,
  layThongTinChiTietLoaiCongViecChinhAction,
} from "../../redux/actions/QuanLyCongViecAction";
import HeaderNotForHomePage from "../../_Component/Header/HeaderNotForHomePage";
import "./JobTypes.scss";
import { NavLink } from "react-router-dom";
import Suggested from "../../_Component/Suggested/Suggested";

export default function JobTypes(props) {
  const { chiTietLoaiCongViecChinh, thongTinChiTietLoaiCongViecChinh } =
    useSelector((state) => state.QuanLyCongViecReducer);

  const TTCTLCVC_USE = thongTinChiTietLoaiCongViecChinh.subTypeJobs;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layChiTietLoaiCongViecChinhAction());
    dispatch(layThongTinChiTietLoaiCongViecChinhAction("6198768aaef344001cecfd43"));
  }, []);

  return (
    <section>
      <HeaderNotForHomePage />
      <Suggested />
      <div id="jobTypes">
        <div className="jobTypes__header">
          <div className="container">
            {thongTinChiTietLoaiCongViecChinh.name ? (
              <h1 className="title">{thongTinChiTietLoaiCongViecChinh.name}</h1>
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
              <i className="fa fa-play-circle"></i>How Friverr Works
            </span>
          </div>
        </div>

        <div className="jobTypes__main">
          <div className="container">
            <div className="jobTypes__main__name">
              <ul>
                {chiTietLoaiCongViecChinh.map((typeJob, index) => {
                  return (
                    <li key={index}>
                      <button
                        title={typeJob.name}
                        onClick={() => {
                          dispatch(
                            layThongTinChiTietLoaiCongViecChinhAction(
                              typeJob._id
                            )
                          );
                        }}
                      >
                        {index + 1}. {typeJob.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="jobTypes__main__detail">
              {TTCTLCVC_USE?.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <NavLink
                      to={`/joblist`}
                      title={item.name}
                      className="jobtype-item"
                    >
                      <div className="card">
                        <div className="card-body">
                          <div className="jobtype-img">
                            {item.image ? (
                              <img src={item.image} alt="job-type-img" />
                            ) : (
                              <img
                                src="http://picsum.photos/1000"
                                alt="job-type-img"
                              />
                            )}
                          </div>
                          <div className="jobtype-name">
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

        <div className="jobTypes__footer">
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
