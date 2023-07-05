import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

function AddRide(props) {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [intervalOfRides, setIntervalOfRides] = useState("");
  const [seats, setSeats] = useState("");
  const [driver, setDriver] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [vehicleList, setVehicleList] = useState("");
  const [probationalDriversLicense, setProbationalDriversLicense] =
    useState("");

  // Get the token from the localStorage
  const storedToken = localStorage.getItem("authToken");

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      toCity,
      fromCity,
      intervalOfRides,
      seats,
      vehicle,
      driver,
      probationalDriversLicense,
    };
    console.log(requestBody);

    // Send the token through the request "Authorization" Headers
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/api/rides`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state
        setToCity("");
        setFromCity("");
        setIntervalOfRides("");
        setSeats("");
        setDriver("");
        setVehicle("");
        setProbationalDriversLicense("");
      })
      .catch((error) => console.log(error));
  };

  const getUserVehicles = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/vehicle`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setVehicleList(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUserVehicles();
  }, []);

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

        <label for="intervalOfRides">Interval of ride:</label>
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

        <label for="intervalOfRides">Seats:</label>
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

        <label for="vehicle">Vehicle:</label>
        <select
          id="vehicle"
          name="vehicle"
          size="1"
          onChange={(e) => setVehicle(e.target.value)}
        >
          <option>Select a vehicle</option>
          {vehicleList.length > 0 &&
            vehicleList.map((vehicle) => (
              <option name="vehicle" value={vehicle._id}>
                {vehicle.vehicle}
              </option>
            ))}
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddRide;
