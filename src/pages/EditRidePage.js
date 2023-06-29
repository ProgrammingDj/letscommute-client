import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

function EditRidePage(props) {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [intervalOfRide, setIntervalOfRide] = useState("");
  const [seats, setSeats] = useState("");
  const [driver, setDriver] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [vehicleImage, setVehicleImage] = useState("");
  const [probationalDriversLicense, setProbationalDriversLicense] = useState("");
  const [carSharing, setCarSharing] = useState("");

  const { rideId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/rides/${rideId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneRide = response.data;
        setToCity(oneRide.toCity);
        setFromCity(oneRide.fromCity);
        setIntervalOfRide(oneRide.intervalOfRide);
        setSeats(oneRide.seats);
        setDriver(oneRide.driver);
        setVehicle(oneRide.vehicle);
        setVehicleImage(oneRide.vehicleImage);
        setProbationalDriversLicense(oneRide.carSharing);

      })
      .catch((error) => console.log(error));
  }, [rideId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    axios
      .put(`${API_URL}/api/rides/${rideId}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        navigate(`/rides/${rideId}`);
      });
  };

  const deleteRide = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    axios
      .delete(`${API_URL}/api/rides/${rideId}`, {
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

        <label>VehicleImage:</label>
        <textarea
          name="VehicleImage"
          value={vehicleImage}
          onChange={(e) => setVehicleImage(e.target.value)}
        />

        <label>Probational Driver's License:</label>
        <textarea
          name="Probational Driver's License"
          value={probationalDriversLicense}
          onChange={(e) => setProbationalDriversLicense(e.target.value)}
        />

        <label>Carsharing:</label>
        <textarea
          name="Carsharing"
          value={carSharing}
          onChange={(e) => setCarSharing(e.target.value)}
        />

        <button type="submit">Update Ride</button>
      </form>

      <button onClick={deleteRide}>Delete Ride</button>
    </div>
  );
}

export default EditRidePage;
