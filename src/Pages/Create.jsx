import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [createdata, setcreatedat] = useState({
    username: "",
    name: "",
    email: "",
    address: {
      suite: "",
      street: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check if the property is nested
    if (name.startsWith('address.geo.')) {
        const geoPropertyName = name.split('address.geo.')[1];
        setcreatedat((prevData) => ({
            ...prevData,
            address: {
                ...prevData.address,
                geo: {
                    ...prevData.address.geo,
                    [geoPropertyName]: value,
                },
            },
        }));
    } else if (name.includes('.')) {
        const [parent, child] = name.split('.');
        setcreatedat((prevData) => ({
            ...prevData,
            [parent]: {
                ...prevData[parent],
                [child]: value,
            },
        }));
    } else {
        // For non-nested properties
        setcreatedat((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("https://6644d505b8925626f8902459.mockapi.io/api/user", createdata)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));

    navigate("/details");
  };
  return (
    <section className="intro">
      <div className="mask d-flex align-items-center h-100 gradient-custom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card">
                <div className="card-body p-4 p-md-5">
                  <form onSubmit={handleSubmit}>
                    <h2 className="poppins-light text-center mb-4">Create</h2>
                    {/* UserName */}
                    <h6 className="poppins-light">User Name:</h6>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="text"
                        name="username"
                        className="form-control"
                        value={createdata.username}
                        onChange={handleChange}
                      />
                    </div>
                    {/* Name */}
                    <h6 className="poppins-light">Name:</h6>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={createdata.name}
                        onChange={handleChange}
                      />
                    </div>
                    {/* Email */}
                    <h6 className="poppins-light">Email:</h6>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={createdata.email}
                        onChange={handleChange}
                      />
                    </div>
                    {/* Address */}
                    <div className="row mb-4">
                      <h6 className="poppins-light">Address:</h6>
                      <div className="col">
                        <div data-mdb-input-init className="form-outline w-75 ">
                          <input
                            type="text"
                            name="address.suite"
                            className="form-control"
                            value={createdata.address.suite}
                            onChange={handleChange}
                          />
                          <label className="form-label">Suite</label>
                        </div>
                      </div>
                      <div className="col">
                        <div data-mdb-input-init className="form-outline w-75">
                          <input
                            type="text"
                            name="address.street"
                            className="form-control"
                            value={createdata.address.street}
                            onChange={handleChange}
                          />
                          <label className="form-label">Street</label>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col">
                        <div data-mdb-input-init className="form-outline w-75 ">
                          <input
                            type="text"
                            name="address.city"
                            className="form-control"
                            value={createdata.address.city}
                            onChange={handleChange}
                          />
                          <label className="form-label">City</label>
                        </div>
                      </div>
                      <div className="col">
                        <div data-mdb-input-init className="form-outline w-75">
                          <input
                            type="text"
                            name="address.zipcode"
                            className="form-control"
                            value={createdata.address.zipcode}
                            onChange={handleChange}
                          />
                          <label className="form-label">ZipCode</label>
                        </div>
                      </div>
                    </div>
                    {/* Locaction */}
                    <div className="row mb-4">
                      <h6 className="poppins-light">Location:</h6>
                      <div className="col">
                        <div data-mdb-input-init className="form-outline w-75 ">
                          <input
                            type="text"
                            name="address.geo.lat"
                            className="form-control"
                            value={createdata.address.geo.lat}
                            onChange={handleChange}
                          />
                          <label className="form-label">Lat</label>
                        </div>
                      </div>
                      <div className="col">
                        <div data-mdb-input-init className="form-outline w-75">
                          <input
                            type="text"
                            name="address.geo.lng"
                            className="form-control"
                            value={createdata.address.geo.lng}
                            onChange={handleChange}
                          />
                          <label className="form-label">Lng</label>
                        </div>
                      </div>
                    </div>
                    {/* Phone */}
                    <h6 className="poppins-light">Phone:</h6>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        value={createdata.phone}
                        onChange={handleChange}
                      />
                    </div>
                    {/* Webite */}
                    <h6 className="poppins-light">Website:</h6>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="text"
                        name="website"
                        className="form-control"
                        value={createdata.website}
                        onChange={handleChange}
                      />
                    </div>
                    {/* Company Name */}
                    <h6 className="poppins-light">Company Name:</h6>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="text"
                        name="company.name"
                        className="form-control"
                        value={createdata.company.name}
                        onChange={handleChange}
                      />
                    </div>
                    {/* company catchPhrase */}
                    <h6 className="poppins-light">Company catchPhrase:</h6>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="text"
                        name="company.catchPhrase"
                        className="form-control"
                        value={createdata.company.catchPhrase}
                        onChange={handleChange}
                      />
                    </div>
                    {/* Company bs */}
                    <h6 className="poppins-light">Company bs:</h6>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="text"
                        name="company.bs"
                        className="form-control"
                        value={createdata.company.bs}
                        onChange={handleChange}
                      />
                    </div>
                    {/* button */}
                    <button
                      className="btn btn-success text-center"
                      type="submit"
                    >
                      Create
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Create;
