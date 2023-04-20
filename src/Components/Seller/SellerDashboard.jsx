import React, { useEffect } from "react";
import { useState } from "react";
import { Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap";
import "./Seller.css";
import axios from "axios";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SellerDashboard = () => {
  const [modal, setmodal] = useState(false);
  const [modaldata, setModaldata] = useState({ user_id: localStorage._id,username:localStorage.username});
  const [property, setProperty] = useState([]);

useEffect(() => {
  getPropertiesData();
}, []);

const getPropertiesData = () => {
  axios.get(`http://127.0.0.1:4000/property/${localStorage._id}`)
      .then((response) => {
        setProperty(response.data);
      });
  };

  console.log("modalData=============>", modaldata);

  const inputChange = (e) => {
    setModaldata((prevalue) => ({
      ...prevalue,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = () => {
    axios
      .post("http://127.0.0.1:4000/property", modaldata)
      .then(() => {
        setModaldata({});
        setmodal(!modal);
        getPropertiesData();
        toast.success("Add Successfully", {
          position: "top-center",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <div className="top">
        <button className="profile-btn">
          <p>Profile</p>
        </button>
        <span> Seller ,</span> {localStorage.username}
        <button className="logout" onClick={handleLogout}>
          <p>logout</p>
        </button>
      </div>
      <div className="side-menu">
        <div className="menu-top">
          <h4>List of Property</h4>
        </div>
        <hr />
        <div className="menu-body">
          {property.map((list) => {
            return <li key={list._id}>{list.propertyname}</li>;
          })}
        </div>
      </div>
      <div className="body">
        <Modal
          className="modalcontainer"
          size="lg"
          isOpen={modal}
          toggle={() => setmodal(!modal)}
        >
          <ModalHeader className="modalHeader" toggle={() => setmodal(!modal)}>
            <p className=""> Add- Property</p>
          </ModalHeader>

          <ModalBody className="modalbody">
            <table class="table">
              <tbody>
                <tr>
                  <td>Property Name :</td>
                  <td>
                    <input
                      value={modaldata.propertyname || ""}
                      onChange={inputChange}
                      name="propertyname"
                      className="minput"
                      placeholder="Property name..."
                      type="text"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Address :</td>
                  <td>
                    <input
                      value={modaldata.address || ""}
                      onChange={inputChange}
                      name="address"
                      className="minput"
                      placeholder="Address.."
                      type="text"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Dimensions :</td>
                  <td>
                    <input
                      value={modaldata.dimensions || ""}
                      onChange={inputChange}
                      name="dimensions"
                      className="minput"
                      placeholder="Dimensions"
                      type="text"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Price :</td>
                  <td>
                    <input
                      value={modaldata.price || ""}
                      onChange={inputChange}
                      name="price"
                      className="minput"
                      placeholder="price.."
                      type="number"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Images :</td>
                  <td>
                    <input
                      onChange={inputChange}
                      value={modaldata.images || ""}
                      className="minput "
                      name="images"
                      placeholder="url..."
                      type="text"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </ModalBody>
          <ModalFooter className="modalFooter">
            <button
              onClick={submit}
              className="modalfooterbutton btn btn-outline-info"
            >
              Submit
            </button>
          </ModalFooter>
        </Modal>
        <button className="add-prop" onClick={() => setmodal(true)}>
          <p>Add-Property</p>
        </button>
        {property.map((data) => {
          return (
            <Card
              key={data._id}
              propertyname={data.propertyname}
              price={data.price}
              address={data.address}
              dimensions={data.dimensions}
              images={data.images}
            />
          );
        })}
      </div>
      <div></div>
      <ToastContainer/>
    </div>
  );
};

export default SellerDashboard;
