import { Fragment, useEffect } from "react";
import { Route } from "react-router-dom";
import Slider from "react-slick";


export const UserTemplate = (props) => {

  const { Component, ...restProps } = props; // path, exact, Component

  // Tự động chuyển hướng về đầu trang khi trở lại trang trước đó
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        //props.location, props.history, props.match
        return (
          <Fragment>
            <div
              className="w-100 d-flex justify-content-center align-items-center py-md-5"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "bottom",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(https://i.pinimg.com/originals/18/9c/1d/189c1dd25c9498241d0159716aded38e.jpg)`,
              }}
            >
              <Component {...propsRoute} />
            </div>
          </Fragment>
        );
      }}
    />
  );
};

// https://i.pinimg.com/originals/18/9c/1d/189c1dd25c9498241d0159716aded38e.jpg
// https://img.8wallpapers.com/uploads/2019/11/36316b9288624e1fab40c683.jpg
// http://cdn.wallpaperhi.com/1920x1080/20120721/trees%20stars%20artwork%20night%20landscapes%20night%20sky%20exclusive%201920x1080%20wallpaper_www.wallpaperhi.com_71.jpg
