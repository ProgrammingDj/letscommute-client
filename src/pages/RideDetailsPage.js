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
          <tbody>
            <tr>
              <th>
                <h1 className="">
                  <span>{ride.fromCity}</span> → <span>{ride.toCity}</span>
                </h1>
              </th>
            </tr>
            <tr>
              <td>Interval of rides:</td>
              <td>{ride.intervalOfRides}</td>
            </tr>
            <tr>
              <td>Number of seats:</td>
              <td>{ride.seats}</td>
            </tr>
            <tr>
              <td>The vehicle:</td>
              <td>{ride.vehicle.vehicle}</td>
            </tr>
            <tr>
              <td>Vehicle image</td>
              <td>
                <img
                  className="image"
                  src={ride.vehicle.imageUrl}
                  alt="image of vehicle"
                  width="300"
                />
              </td>
            </tr>
            <tr>
              <td>The driver is:</td>
              <td>{ride.vehicle.owner.name}</td>
            </tr>
            <tr>
              <td>Drivers phonenumber:</td>
              <td>{ride.vehicle.owner.phoneNumber}</td>
            </tr>
            <tr>
              <td>Probationary driver:</td>
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
