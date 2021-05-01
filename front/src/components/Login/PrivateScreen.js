import { useState, useEffect } from "react";
import {Redirect , Route , BrowserRouter as Router , Switch} from 'react-router-dom'
import axios from "axios";
import "./PrivateScreen.css";
import Dashboard from '../Dashboard/Dashboard'

const PrivateScreen = () => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Authorization" : `Bearer ${localStorage.getItem("authToken")}`,
          "Content-Type": "application/json"
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchPrivateDate();
  }, []);
  return error ? (
     <Redirect path='/'/>
  ) : (
    <Dashboard />
  );
};

export default PrivateScreen;
