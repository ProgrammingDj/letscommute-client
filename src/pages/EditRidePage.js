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
    const requestBody = { toCity, fromCity, intervalOfRides, seats };

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
    <div className="editRidePage">
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
        <input
          name="To City"
          value={toCity}
          onChange={(e) => setToCity(e.target.value)}
        />

        <label>Interval of ride:</label>
        <select
          id="intervalOfRides"
          name="intervalOfRides"
          size="1"
          onChange={(e) => setIntervalOfRides(e.target.value)}
          value={intervalOfRides}
        >
          <option>Select interval</option>
          <option value="Multiple times a Week">Multiple times a Week</option>
          <option value="Once a Week">Once a Week</option>
          <option value="Every 2 Weeks">Every 2 Weeks</option>
          <option value="Every 3 Weeks">Every 3 Weeks</option>
          <option value="Once a month">Once a month</option>
        </select>

        <label>Seats:</label>

        <select
          id="seats"
          name="seats"
          size="1"
          onChange={(e) => setSeats(e.target.value)}
          value={seats}
        >
          <option>Select # of seats</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
        <br />
        <button type="submit">Update Ride</button>
      </form>
      <div>
        <button onClick={deleteRide}>Delete Ride</button>
      </div>
    </div>
  );
}

export default EditRidePage;
