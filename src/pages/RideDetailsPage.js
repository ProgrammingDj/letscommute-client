import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import AddVehicle from "../components/AddVehicle";
import VehicleCard from "../components/VehicleCard";

const API_URL = "http://localhost:5005";

function RideDetailsPage(props) {
  const [ride, setRide] = useState(null);
  const { rideId } = useParams();

  const getRide = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URL}/api/rides/${rideId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneRide = response.data;
        setRide(oneRide);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getRide();
  }, []);

  return (
    <div className="RideDetails">
      {ride && (
        <>
          <h1>{ride.toCity}</h1>
          <h1>{ride.fromCity}</h1>
          <p>{ride.intervalOfRide}</p>
          <p>{ride.seats}</p>
          <p>{ride.driver}</p>
          <p>{ride.vehicle}</p>
          <p>{ride.vehicleImage}</p>
          <p>{ride.probationalDriversLicense}</p>
          <p>{ride.carSharing}</p>
        </>
      )}

      <AddVehicle refreshRide={getRide} rideId={rideId} />

      {ride &&
        ride.vehicles.map((vehicle) => (
          <VehicleCard key={vehicle._id} {...vehicle} />
        ))}

      <Link to="/rides">
        <button>Back to explore</button>
      </Link>

      <Link to={`/rides/edit/${rideId}`}>
        <button>Edit Ride</button>
      </Link>
    </div>
  );
}

export default RideDetailsPage;
