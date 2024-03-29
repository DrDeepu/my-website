import React from "react";
import { NavLink } from "react-router-dom";

function Common({ text, btn, visit ,img}) {
  return (
    <>
      <section id="header" className="d-flex">
        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {text}
                    <strong className="navbar-brand"> My-Website</strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of talented devolper Website
                  </h2>
                  <div className="mt-3">
                    <NavLink
                      className="btn btn-outline-primary rounded-pill"
                      to={visit}
                    >
                      {btn}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={img} className="animated" alt="home.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;
