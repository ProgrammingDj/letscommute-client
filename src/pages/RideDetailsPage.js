import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

function RideDetailsPage(props) {
  const [ride, setRide] = useState(null);
  const { rideId } = useParams();

  const getRide = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");
    console.log(rideId);
    // Send the token through the request "Authorization" Headers
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/rides/${rideId}`, {
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
    <div className="rideDetails">
      {ride && (
        <table>
          <caption>
            <h1 className="">
              {ride.fromCity} → {ride.toCity}
            </h1>
          </caption>
          <tbody>
            <tr>
              <th>Interval of rides:</th>
              <td>{ride.intervalOfRides}</td>
            </tr>
            <tr>
              <th>Number of seats:</th>
              <td>{ride.seats}</td>
            </tr>
            <tr>
              <th>The vehicle:</th>
              <td>{ride.vehicle.vehicle}</td>
            </tr>
            <tr>
            
              <td className="image2" colspan="2">
                <img
                  className="image"
                  src={ride.vehicle.imageUrl}
                  alt="image of vehicle"
                  
                />
              </td>
            </tr>
            <tr>
              <th>The driver is:</th>
              <td>{ride.vehicle.owner.name}</td>
            </tr>
            <tr>
              <th>Drivers phonenumber:</th>
              <td>{ride.vehicle.owner.phoneNumber}</td>
            </tr>
            <tr>
              <th>Probationary driver:</th>
              <td>{ride.vehicle.owner.probationaryDriver}</td>
            </tr>
          </tbody>
        </table>
      )}

      <Link to="/rides">
        <button>Back to rides</button>
      </Link>
      <Link to={`/rides/edit/${rideId}`}>
        <button>Edit Ride</button>
      </Link>
    </div>
  );
}

export default RideDetailsPage;
