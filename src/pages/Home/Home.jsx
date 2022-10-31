
import { layDanhSachCongViecAction } from "../../redux/actions/QuanLyCongViecAction";
import Advertisement from "./Advertisement/Advertisement";
import MultipleSlick from "./MultipleSlick/MultipleSlick";
import Marketplace from "./Marketplace/Marketplace";
import Header from "../../_Component/Header/Header";
import React, { useEffect, useState } from "react";
import LogoMaker from "./LogoMaker/LogoMaker";
import Solution from "./Solution/Solution";
import Carousel from "./Carousel/Carousel";
import { useDispatch } from "react-redux";
import Talent from "./Talent/Talent";

export default function Home(props) {
  const [screen, setScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Mỗi lần load dữ liệu component lên hoặc resize sẽ xét lại kích thước cho biến screen
    window.onload = () => {
      setScreen({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.onresize = () => {
      setScreen({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    return () => {
      window.removeEventListener("onload");
      window.removeEventListener("onresize");
    };
  }, []);

  // Chữa cháy cho phần profile
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachCongViecAction());
  }, []);
  
  // Sticky header
  // window.addEventListener("scroll", function () {
  //   var header = this.document.querySelector(".header");
  //   header.classList.toggle("sticky", this.window.scroll > 0);
  // });

  return (
    <section>
      <Header />
      <Carousel />
      <MultipleSlick />
      <Advertisement />
      <Marketplace/>
      <Solution />
      <LogoMaker/>
      <Talent/>
    </section>
  );
}
