import { useState, useEffect, useContext } from "react";
import axios from "axios";
import RideCard from "../components/RideCard";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";

function MyRidesPage() {
  const [rides, setRides] = useState([]);
  const { user } = useContext(AuthContext);

  const getUserRides = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/rides`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const filteredRides = response.data.filter(
          (ride) => ride.vehicle.owner === user?._id
        );
        setRides(filteredRides)
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUserRides();
  }, [user]);

  return (
    <div className="listContainer">
      <div className="listmyRides">
        {rides.map((ride) => (
          <RideCard key={ride._id} {...ride} />
        ))}
      </div>
    </div>
  );
}

export default MyRidesPage;