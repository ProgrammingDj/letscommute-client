import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

function AddRide(props) {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [intervalOfRide, setIntervalOfRide] = useState("");
  const [seats, setSeats] = useState("");
  const [driver, setDriver] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [vehicleImage, setVehicleImage] = useState("");
  const [probationalDriversLicense, setProbationalDriversLicense] =
    useState("");
  const [carSharing, setCarSharing] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      toCity,
      fromCity,
      intervalOfRide,
      seats,
      driver,
      vehicle,
      vehicleImage,
      probationalDriversLicense,
      carSharing,
    };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/api/rides`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state
        setToCity("");
        setFromCity("");
        setIntervalOfRide("");
        setSeats("");
        setDriver("");
        setVehicle("");
        setVehicleImage("");
        setProbationalDriversLicense("");
        setCarSharing("");
        props.refreshProjects();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="addRide">
      <h3>Add Ride</h3>

      <form onSubmit={handleSubmit}>
        <label>From City:</label>
        <input
          type="text"
          name="From City"
          value={fromCity}
          onChange={(e) => setFromCity(e.target.value)}
        />

        <label>To City:</label>
        <input
          type="text"
          name="To City"
          value={toCity}
          onChange={(e) => setToCity(e.target.value)}
        />

        <label for="intervalOfRide">Interval of ride:</label>
        <select
          id="intervalOfRide"
          name="intervalOfRide"
          size="1"
          onChange={(e) => setIntervalOfRide(e.target.value)}
          value={intervalOfRide}
        >
          <option value="multible">Multiple times a Week</option>
          <option value="onceWeek">Once a Week</option>
          <option value="twoWeeks">Every 2 Weeks</option>
          <option value="threeWeeks">Every 3 Weeks</option>
          <option value="onceMonth">Once a month</option>
        </select>

        <label for="intervalOfRide">Seats:</label>
        <select
          id="seats"
          name="seats"
          size="1"
          onChange={(e) => setSeats(e.target.value)}
          value={seats}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>

        <label for="vehicle">Vehicle:</label>
        <select
          id="vehicle"
          name="vehicle"
          size="1"
          onChange={(e) => setVehicle(e.target.value)}
        >
          <option value="{vehicle}">1</option>
          <option value="{vehicle}">2</option>
          <option value="{vehicle}">3</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddRide;
