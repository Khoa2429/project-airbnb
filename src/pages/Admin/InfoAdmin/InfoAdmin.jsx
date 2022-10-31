import moment from 'moment';
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { layThongTinChiTietNguoiDungAction } from '../../../redux/actions/QuanLyNguoiDungAction';
import './InfoAdmin.scss'

 function InfoAdmin(props) {

  const { userLogin, thongTinChiTietNguoiDung } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   const action = layThongTinChiTietNguoiDungAction(userLogin._id);
  //   dispatch(action);
  //   props.history.push("/admin/infoadmin")
  // }, []);
// console.log( thongTinChiTietNguoiDung," thongTinChiTietNguoiDung")

  return (
    <div id="infoAdmin">
      <h2 className="mb-5">Admin: {thongTinChiTietNguoiDung.name}</h2>
      <div title="Click to update information"><NavLink to="/admin/infoadmin/updateinfoadmin" className="button-update-info">Update information</NavLink></div>
      <div className="d-flex justify-content-start">
        <table>
          <tbody >
            <tr>
              <td><span>Role</span><span>:</span></td>
              <td>
                {thongTinChiTietNguoiDung.role === "ADMIN" ? "Admin" : "Client"}
              </td>
            </tr>
            <tr>
              <td><span>Id</span><span>:</span></td>
              <td>{thongTinChiTietNguoiDung._id}</td>
            </tr>
            <tr>
              <td><span>Password</span><span>:</span></td>
              <td>{thongTinChiTietNguoiDung.password}</td>
            </tr>
            <tr>
              <td><span>Email</span><span>:</span></td>
              <td>{thongTinChiTietNguoiDung.email}</td>
            </tr>
            <tr>
              <td><span>Name</span><span>:</span></td>
              <td>{thongTinChiTietNguoiDung.name}</td>
            </tr>
            <tr>
              <td><span>Birthday</span><span>:</span></td>
              <td>{moment(thongTinChiTietNguoiDung.birthday).format("DD/MM/YYYY")}</td>
            </tr>
            <tr>
              <td><span>Phone</span><span>:</span></td>
              <td>{thongTinChiTietNguoiDung.phone}</td>
            </tr>
            <tr>
              <td><span>Gender</span><span>:</span></td>
              <td>{thongTinChiTietNguoiDung.gender === true ? "Male" : "Female"}</td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
  )
}

export default memo(InfoAdmin)