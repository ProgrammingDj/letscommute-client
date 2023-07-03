import { useState, useEffect } from "react";
import axios from "axios";
import AddRide from "../components/AddRide";
import RideCard from "../components/RideCard";

const API_URL = "http://localhost:5005";

function ListRides() {
  const [rides, setRides] = useState([]);

  const getAllRides = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URL}/api/rides`, {
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
      <AddRide refreshRides={getAllRides} />

      {rides.map((ride) => (
        <RideCard key={ride._id} {...ride} />
      ))}
    </div>
  );
}

export default ListRides;
