import React from "react";
import "./Solution.scss";
import { CheckCircleOutlined } from "@ant-design/icons";

export default function Solution(props) {
  return (
    <section id="solution">
      <div className="my-container">
        <div className="d-flex flex-wrap">
          <div className="advertisement-left">
            <h1>
              fiverr <span>business.</span>
            </h1>
            <h2>
              A business solution designed for <span>team</span>
            </h2>

            <h3>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </h3>

            <ul>
              <li className="d-flex align-items-start">
                <CheckCircleOutlined
                  className="mr-3"
                  style={{ fontSize: "24px", color: "#7a7d85" }}
                />
                <h2>Connect to freelancers with proven business experience</h2>
              </li>
              <li className="d-flex align-items-start">
                {" "}
                <CheckCircleOutlined
                  className="mr-3"
                  style={{ fontSize: "24px", color: "#7a7d85" }}
                />
                <h2>
                  Get matched with the perfect talent by a customer success
                  manager
                </h2>
              </li>
              <li className="d-flex align-items-start">
                {" "}
                <CheckCircleOutlined
                  className="mr-3"
                  style={{ fontSize: "24px", color: "#7a7d85" }}
                />
                <h2>
                  Manage teamwork and boost productivity with one powerful
                  workspace
                </h2>
              </li>
            </ul>
            <button>Explore Fiverr Business</button>
          </div>
          <div className="advertisement-right">
            <img
              src="./img/Solution/solution.png"
              alt="solution-img"
              style={{ width: "100%", borderRadius: "5px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
