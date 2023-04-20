import axios from "axios";
import React from "react";
import { useEffect } from "react";
import Verified from "@mui/icons-material/Verified";
import { useState } from "react";
import Fade from "@mui/material/Fade";
import AdminPanelSettings from "@mui/icons-material/AdminPanelSettings";
import "./style.css";
import CheckCircleSharp from "@mui/icons-material/CheckCircleSharp";
import Cancel from "@mui/icons-material/Cancel";
import Tooltip from "@mui/material/Tooltip";
import Email from "@mui/icons-material/Email";
import Badge from "@mui/icons-material/Badge";
const Admin = () => {
  const [userData, setUserdata] = useState([]);
  const [Property, setProperty] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:4000/users")
      .then((response) => {
        // console.log(response.data);
        setUserdata(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:4000/property")
      .then((response) => {
        console.log(response.data);
        setProperty(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // gateway


  return (
    <div>
      <div className="admin_top">
        <AdminPanelSettings
          sx={{ fontSize: 50 }}
          color="info"
        ></AdminPanelSettings>
        admin
        <AdminPanelSettings
          sx={{ fontSize: 50 }}
          color="info"
        ></AdminPanelSettings>
      </div>
      <div className="admin_left">
        <div className="admin_top_header">
          List OF All Property Verification
          <Verified
            sx={{ fontSize: 30, color: "#0ffc03" }}
            color="green"
          ></Verified>
        </div>
        {Property.map((data) => {
          return (
            <div className="admin_top_body_data">
              <li className="name">{data.propertyname}</li>
              <li className="price">{data.price}</li>
              <li className="address">{data.address}</li>  
              <li className="buttons">
                <button className="admin_btn approve">
                  <p>
                    <Tooltip title="Approve">
                      <CheckCircleSharp
                        sx={{ fontSize: 50, color: "#0cc73b" }}
                      ></CheckCircleSharp>
                    </Tooltip>
                  </p>
                </button>
                <button className="admin_btn   ">
                  <p>
                    <Tooltip
                      title="Decline"
                      arrow
                      TransitionComponent={Fade}
                      TransitionProps={{ timeout: 600 }}
                    >
                      <Cancel sx={{ fontSize: 50, color: "#e33509" }}></Cancel>
                    </Tooltip>
                  </p>
                </button>
              </li>
            </div>
          );
        })}
      </div>
      <div className="admin_right">
        <div className="admin_top_header">List OF Buyer and Seller</div>
        <table class="table table-hover admin_table">
          <thead>
            <tr class="table-info">
              <th>
                Name <Badge sx={{ fontSize: 30, color: "#0d6a7a" }} />
              </th>
              <th>
                Email-Id
                <Email sx={{ fontSize: 30, color: "#0d6a7a" }}> </Email>
              </th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((data) => {
              return (
                <tr class="table-danger" key={data._id}>
                  <td className="table_name">{data.username}</td>
                  <td>{data.email}</td>
                  <td>{data.role}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
