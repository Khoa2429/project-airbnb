import React from 'react'
import { NavLink } from "react-router-dom";
import './Footer.scss'

export default function Footer() {
  return (
    <footer id="footer">
      <div className='container'>

        <div className='footer-top'>
          <div className='footer-top-item'>
            <h1>GIỚI THIỆU</h1>
            <ul>
              <li><a href="#" title="Phương thức hoạt động của Aribnb">Phương thức hoạt động của Aribnb</a> </li>
              <li><a href="#" title="Trang tin tức">Trang tin tức</a> </li>
              <li><a href="#" title="Nhà đầu tư">Nhà đầu tư</a> </li>
              <li><a href="#" title="Airbnb Plus">Airbnb Plus</a></li>
              <li><a href="#" title="Airbnb Luxe">Airbnb Luxe</a> </li>
              <li><a href="#" title="HotelTonight">HotelTonight</a> </li>
              <li><a href="#" title="Airbnb for Work">Airbnb for Work</a> </li>
              <li><a href="#" title="Nhờ có Host, mọi điều đều có thể">Nhờ có Host, mọi điều đều có thể</a></li>
              <li><a href="#" title="Cơ hội nghề nghiệp">Cơ hội nghề nghiệp</a></li>
              <li><a href="#" title="Thư của nhà sáng lập">Thư của nhà sáng lập</a></li>
            </ul>
          </div>
          <div className='footer-top-item'>
            <h1>CỘNG ĐỒNG</h1>
            <ul>
              <li><a href="#" title="Events">Sự đa dạng và Cảm giác thân thuộc</a> </li>
              <li><a href="#" title="Blog">Tiện nghi phù hợp cho người khuyết tật</a> </li>
              <li><a href="#" title="Forum">Đối tác liên kết Airbnb</a> </li>
              <li><a href="#" title="Community Standards">Chỗ ở cho tuyến đầu</a> </li>
              <li><a href="#" title="Podcast">Lượt giới thiệu của khách</a> </li>
              <li><a href="#" title="Affiliates">Airbnb.org</a> </li>
            </ul>
          </div>          
          <div className='footer-top-item'>
            <h1>ĐÓN TIẾP KHÁCH</h1>
            <ul>
              <li><a href="#" title="Cho thuê nhà">Cho thuê nhà</a> </li>
              <li><a href="#" title="Tổ chức trải nghiệm trực tuyến">Tổ chức trải nghiệm trực tuyến</a> </li>
              <li><a href="#" title="Tổ chức trải nghiệm">Tổ chức trải nghiệm</a> </li>
              <li><a href="#" title="Đón tiếp khách có trách nhiệm">Đón tiếp khách có trách nhiệm</a> </li>
              <li><a href="#" title="Trung tâm tài nguyên">Trung tâm tài nguyên</a> </li>
              <li><a href="#" title="Trung tâm cộng đồng">Trung tâm cộng đồng</a> </li>
            </ul>
          </div>
          <div className='footer-top-item'>
            <h1>HỖ TRỢ</h1>
            <ul>
              <li><a href="#" title="Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi">Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi</a> </li>
              <li><a href="#" title="Trung tâm trợ giúp">Trung tâm trợ giúp</a> </li>
              <li><a href="#" title="Các tùy chọn hủy">Các tùy chọn hủy</a> </li>
              <li><a href="#" title="Hỗ trợ khu dân cư">Hỗ trợ khu dân cư</a> </li>
              <li><a href="#" title="Tin cậy và an toàn">Tin cậy và an toàn</a> </li>
            </ul>
          </div>
        </div>


        <div className='footer-bottom'>
          <div className='footer-bottom-left'>
            <span>© 2021 Airbnb, Inc. All rights reserved · Quyền riêng tư · Điều khoản · Sơ đồ trang web</span>
          </div> 
          <div className='footer-bottom-right'>
            <a href="#"><i className="fa fa-globe"></i>Tiếng Việt(VN)</a>
            <a href="#"><i className="fa fa-dollar-sign"></i>USD</a>
            <ul>
            <li><a href="https://www.facebook.com/" title="Facebook" target='_blank'><i className="fab fa-facebook"></i></a></li>
              <li><a href="https://www.twitter.com/" title="Twitter" target='_blank'><i className="fab fa-twitter"></i></a> </li>
              <li><a href="https://www.instagram.com/" title="Instagram" target='_blank'><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  ) 
}
