import React from "react";

export default function Talent(props) {
  return (
    <section
      style={{
        backgroundImage: "url(./img/Talent/talent.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "450px",
      }}
      className="d-flex align-items-center"
    >
      <div style={{ width: "70%", padding: "50px" }}>
        <h1 className="text-white mb-4" style={{ fontSize: "40px" }}>
          Find the <i>talent</i> needed to get your business <i>growing</i>.
        </h1>
        <button className="btn btn-success px-4 py-2 font-weight-bold">
          Get started
        </button>
      </div>
    </section>
  );
}
