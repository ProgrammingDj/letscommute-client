import { useState, useEffect } from "react";
import axios from "axios";
import RideCard from "../components/RideCard";

const API_URL = "http://localhost:5005";

function ListRides() {
  const [rides, setRides] = useState([]);

  const getAllRides = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/rides/myrides`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setRides(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllRides();
  }, []);

  return (
    <div className="ListRides">
      {rides.map((ride) => (
        <RideCard key={ride._id} {...ride} />
      ))}
    </div>
  );
}

export default ListRides;
