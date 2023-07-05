import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

function EditRidePage(props) {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [intervalOfRides, setIntervalOfRides] = useState("");
  const [seats, setSeats] = useState("");
  const [vehicle, setVehicle] = useState("");

  const { rideId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/rides/${rideId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneRide = response.data;
        setToCity(oneRide.toCity);
        setFromCity(oneRide.fromCity);
        setIntervalOfRides(oneRide.intervalOfRides);
        setSeats(oneRide.seats);
        setVehicle(oneRide.vehicle);
      })
      .catch((error) => console.log(error));
  }, [rideId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { toCity, fromCity, intervalOfRides, seats, vehicle };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    axios
      .put(
        `${process.env.REACT_APP_SERVER_URL}/api/rides/${rideId}`,
        requestBody,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      )
      .then((response) => {
        navigate(`/rides/${rideId}`);
      });
  };

  const deleteRide = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/api/rides/${rideId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        navigate("/rides");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="EditRidePage">
      <h3>Edit the Ride</h3>

      <form onSubmit={handleFormSubmit}>
        <label>From City:</label>
        <input
          type="text"
          name="From City"
          value={fromCity}
          onChange={(e) => setFromCity(e.target.value)}
        />

        <label>To City:</label>
        <textarea
          name="To City"
          value={toCity}
          onChange={(e) => setToCity(e.target.value)}
        />

        <label>Interval of ride:</label>
        <textarea
          name="Interval of ride"
          value={intervalOfRides}
          onChange={(e) => setIntervalOfRides(e.target.value)}
        />

        <label>Seats:</label>
        <textarea
          name="Seats"
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
        />

        <button type="submit">Update Ride</button>
      </form>

      <button onClick={deleteRide}>Delete Ride</button>
    </div>
  );
}

export default EditRidePage;
