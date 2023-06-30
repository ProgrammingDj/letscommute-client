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
  const [probationalDriversLicense, setProbationalDriversLicense] = useState("");
  const [carSharing, setCarSharing] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { toCity, fromCity, intervalOfRide, seats, driver, vehicle, vehicleImage, probationalDriversLicense, carSharing};

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .post(`${API_URL}/api/rides`, requestBody, {
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
    <div className="AddRide">
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
        <textarea
          name="To City"
          value={toCity}
          onChange={(e) => setToCity(e.target.value)}
        />

        <label>Interval of ride:</label>
        <textarea
          name="Interval of ride"
          value={intervalOfRide}
          onChange={(e) => setIntervalOfRide(e.target.value)}
        />

        <label>Seats:</label>
        <textarea
          name="Seats"
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
        />

        <label>Driver:</label>
        <textarea
          name="Driver"
          value={driver}
          onChange={(e) => setDriver(e.target.value)}
        />

        <label>Vehicle:</label>
        <textarea
          name="vehicle"
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
        />


        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddRide;
