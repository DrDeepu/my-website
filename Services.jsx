import React from "react";
import Card from "./Card.jsx";
import {Images} from "./Images";

function Services() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Images.map((img,index) => {
                return <Card img_src={img} key={index}/>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
