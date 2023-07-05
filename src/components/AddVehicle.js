import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

function AddVehicle(props) {
  const [driver, setDriver] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [vehicleImage, setVehicleImage] = useState("");
  const [probationalDriversLicense, setProbationalDriversLicense] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // We need the project id when creating the new task
    const { rideId } = props;
    // Create an object representing the body of the POST request
    const requestBody = {
      driver,
      vehicle,
      vehicleImage,
      probationalDriversLicense,
      rideId,
    };

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/api/vehicle`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state to clear the inputs
        setDriver("");
        setVehicle("");
        setVehicleImage("");
        setProbationalDriversLicense("");

        // Invoke the callback function coming through the props
        // from the RideDetailsPage, to refresh the ride details
        props.refreshProject();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="AddVehicle">
      <form>
        <label>Vehicle:</label>
        <input
          name="vehicle"
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
        />

        <label>VehicleImage:</label>
        <input
          type="file"
          name="VehicleImage"
          value={vehicleImage}
          onChange={(e) => setVehicleImage(e.target.value)}
        />

        <button type="submit">Add Vehicle</button>
      </form>
    </div>
  );
}

export default AddVehicle;
