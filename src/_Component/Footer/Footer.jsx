import React from 'react'
import { NavLink } from "react-router-dom";
import './Footer.scss'

export default function Footer() {
  return (
    <footer id="footer">
      <div className='container'>

        <div className='footer-top'>
          <div className='footer-top-item'>
            <h1>Categories</h1>
            <ul>
              <li><a href="#" title="Graphics & Design">Graphics & Design</a> </li>
              <li><a href="#" title="Digital Marketing">Digital Marketing</a> </li>
              <li><a href="#" title="Writing & Transition">Writing & Transition</a> </li>
              <li><a href="#" title="Video & Animation">Video & Animation</a></li>
              <li><a href="#" title="Music & Audio">Music & Audio</a> </li>
              <li><a href="#" title="Programing & Tech">Programing & Tech</a> </li>
              <li><a href="#" title="Data">Data</a> </li>
              <li><a href="#" title="Business">Business</a></li>
              <li><a href="#" title="Lifestyle">Lifestyle</a></li>
              <li><a href="#" title="Sitemap">Sitemap</a></li>
            </ul>
          </div>
          <div className='footer-top-item'>
            <h1>Community</h1>
            <ul>
              <li><a href="#" title="Events">Events</a> </li>
              <li><a href="#" title="Blog">Blog</a> </li>
              <li><a href="#" title="Forum">Forum</a> </li>
              <li><a href="#" title="Community Standards">Community Standards</a> </li>
              <li><a href="#" title="Podcast">Podcast</a> </li>
              <li><a href="#" title="Affiliates">Affiliates</a> </li>
              <li><a href="#" title="Invite a Friend">Invite a Friend</a> </li>
              <li><a href="#" title="Become a Seller">Become a Seller</a> </li>
              <li><a href="#" title="Fiverr Elevate"><p>Fiverr Elevate</p><span>Exclusive Benfits</span></a> </li>
            </ul>
          </div>          
          <div className='footer-top-item'>
            <h1>More From Friverr</h1>
            <ul>
              <li><a href="#" title="Friverr Business">Friverr Business</a> </li>
              <li><a href="#" title="Friverr Pro">Friverr Pro</a> </li>
              <li><a href="#" title="Friverr Studios">Friverr Studios</a> </li>
              <li><a href="#" title="Friverr Logo Maker">Friverr Logo Maker</a> </li>
              <li><a href="#" title="Friverr Guides">Friverr Guides</a> </li>
              <li><a href="#" title="Get Inspired">Get Inspired</a> </li>
              <li><a href="#" title="ClearVoice"><p>ClearVoice</p><span>Content Marketing</span></a> </li>
              <li><a href="#" title="AND CO"><p>AND CO</p><span>Invoice Software</span></a> </li>
              <li><a href="#" title="Learn"><p>Learn</p><span>Online Courses</span></a> </li>
            </ul>
          </div>
          <div className='footer-top-item'>
            <h1>About</h1>
            <ul>
              <li><a href="#" title="Careers">Careers</a> </li>
              <li><a href="#" title="Press & News">Press & News</a></li>
              <li><a href="#" title="Partnerships">Partnerships</a></li>
              <li><a href="#" title="Privacy Policy">Privacy Policy</a></li>
              <li><a href="#" title="Terms of Service">Terms of Service</a></li>
              <li><a href="#" title="Intellectual Property Claims">Intellectual Property Claims</a></li>
              <li><a href="#" title="Investor Relations">Investor Relations</a></li>
            </ul>
          </div>
          <div className='footer-top-item'>
            <h1>Support</h1>
            <ul>
              <li><a href="#" title="Help & Support">Help & Support</a> </li>
              <li><a href="#" title="Trust & Safety">Trust & Safety</a> </li>
              <li><a href="#" title="Selling on Friverr">Selling on Friverr</a> </li>
              <li><a href="#" title="Buying on Friverr">Buying on Friverr</a> </li>
            </ul>
          </div>
        </div>


        <div className='footer-bottom'>
          <div className='footer-bottom-left'>
            <NavLink to="/">fiverr<sub>®</sub></NavLink>
            <span>© Fiverr Inrernational Ltd. 2022</span>
          </div> 
          <div className='footer-bottom-right'>
            <ul>
              <li><a href="https://www.twitter.com/" title="Twitter" target='_blank'><i className="fab fa-twitter"></i></a> </li>
              <li><a href="https://www.facebook.com/" title="Facebook" target='_blank'><i className="fab fa-facebook"></i></a></li>
              <li><a href="https://www.linkedin.com/" title="LinkedIn" target='_blank'><i className="fab fa-linkedin"></i></a></li>
              <li><a href="https://www.pinterest.com/" title="Pinterest" target='_blank'><i className="fab fa-pinterest"></i></a></li>
              <li><a href="https://www.instagram.com/" title="Instagram" target='_blank'><i className="fab fa-instagram"></i></a></li>
            </ul>
            <a href="#"><i className="fa fa-globe"></i>English</a>
            <a href="#"><i className="fa fa-dollar-sign"></i>USD</a>
            <a href="#" className='person'><i className="fa fa-male"></i></a>
          </div>
        </div>

      </div>
    </footer>
  ) 
}
