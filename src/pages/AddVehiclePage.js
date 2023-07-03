import { useState, useEffect } from "react";
import axios from "axios";
import AddVehicle from "../components/AddVehicle";
import VehicleCard from "../components/VehicleCard";

const API_URL = "http://localhost:5005";

function ExplorePage() {
  const [rides, setRides] = useState([]);

  const getAllRides = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/rides`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setRides(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllRides();
  }, []);

  return (
    <div className="ListRides">
      <AddVehicle refreshRides={getAllRides} />
    </div>
  );
}

export default ExplorePage;