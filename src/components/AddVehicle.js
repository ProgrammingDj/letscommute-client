import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

function AddVehicle(props) {
  const [driver, setDriver] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [vehicleImage, setVehicleImage] = useState("");
  const [probationalDriversLicense, setProbationalDriversLicense] = useState("");
  const [carSharing, setCarSharing] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // We need the project id when creating the new task
    const { rideId } = props;
    // Create an object representing the body of the POST request
    const requestBody = { driver, vehicle, vehicleImage, probationalDriversLicense, carSharing, rideId };

    axios
      .post(`${API_URL}/api/vehicle`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state to clear the inputs
        setDriver("");
        setVehicle("");
        setVehicleImage("");
        setProbationalDriversLicense("");
        setCarSharing("");

        // Invoke the callback function coming through the props
        // from the RideDetailsPage, to refresh the ride details
        props.refreshProject();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="AddVehicle">
      <h3>Add New Vehicle</h3>

      <form onSubmit={handleSubmit}>
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



        <button type="submit">Add Vehicle</button>
      </form>
    </div>
  );
}

export default AddVehicle;
