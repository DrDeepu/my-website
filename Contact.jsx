import React, { useState } from "react";

function Contact() {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  function UserInput({ label, type, placeholder, name, value }) {
    return (
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          {label}
        </label>
        <input
          type={type}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={InputEvent}
        />
      </div>
    );
  }

  const formSubmit = () => {};

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <UserInput
                label="Full Name"
                type="text"
                placeholder="Enter full name"
                name="fullname"
                value={data.fullname}
              />
              <UserInput
                label="Phone"
                type="number"
                placeholder="Enter email"
                name="phone"
                value={data.phone}
              />
              <UserInput
                label="Email"
                type="email"
                placeholder="Enter email"
                name="email"
                value={data.email}
              />
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Message
                </label>
                  <textarea
                    placeholder="Enter something"
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>

              <button
                type="submit"
                className="btn btn-outline-dark rounded-pill "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
