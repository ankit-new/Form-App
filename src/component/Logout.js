import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Logout.css";
import { logout } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import { Table } from "./Table";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.state.user);

  const handleLogout = (e) => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div>
      <Table className="table" />
      <div className="logout">
        <button className="logout-btn" onClick={(e) => handleLogout(e)}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Logout;
