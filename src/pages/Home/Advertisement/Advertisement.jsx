import React from "react";
import "./Advertisement.scss";
import { CheckCircleOutlined } from "@ant-design/icons";

export default function Advertisement(props) {
  return (
    <section id="advertisement">
      <div className="my-container">
        <h1 className="container">
          A whole world of freelance talent at your fingertips
        </h1>
        <div className="d-flex flex-wrap">
          <div className="advertisement-left">
            <ul>
              <li>
                <h2 className="d-flex align-items-center">
                  <CheckCircleOutlined
                    className="mr-2"
                    style={{ fontSize: "20px", color: "#404145" }}
                  />
                  The best for every budget
                </h2>
                <p>
                  Find high-quality services at every price point. No hourly
                  rates, just project-based pricing.
                </p>
              </li>
              <li>
                <h2 className="d-flex align-items-center">
                  <CheckCircleOutlined
                    className="mr-2"
                    style={{ fontSize: "20px", color: "#404145" }}
                  />
                  Quality work done quickly
                </h2>
                <p>
                  Find the right freelancer to begin working on your project
                  within minutes.
                </p>
              </li>
              <li>
                <h2 className="d-flex align-items-center">
                  <CheckCircleOutlined
                    className="mr-2"
                    style={{ fontSize: "20px", color: "#404145" }}
                  />
                  Protected payments, every time
                </h2>
                <p>
                  Always know what you'll pay upfront. Your payment isn't
                  released until you approve the work.
                </p>
              </li>
              <li>
                <h2 className="d-flex align-items-center">
                  <CheckCircleOutlined
                    className="mr-2"
                    style={{ fontSize: "20px", color: "#404145" }}
                  />
                  24/7 support
                </h2>
                <p>
                  Questions? Our round-the-clock support team is available to
                  help anytime, anywhere.
                </p>
              </li>
            </ul>
          </div>  
          <div className="advertisement-right">
            <img
              src="./img/Advertisement/advertisement-img.webp"
              alt="advertisement-img"
              style={{ width: "100%", borderRadius: "5px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
