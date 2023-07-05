import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

function AddVehicle(props) {
  const [vehicle, setVehicle] = useState("");
  const [vehicleImage, setVehicleImage] = useState("");
  const [probationalDriversLicense, setProbationalDriversLicense] =
    useState("");
  const [carSharing, setCarSharing] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // We need the project id when creating the new task
    const { rideId } = props;
    // Create an object representing the body of the POST request
    const requestBody = {
      vehicle,
      vehicleImage,
      probationalDriversLicense,
      carSharing,
      rideId,
    };

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/api/vehicle`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setDriver("");
        setVehicle("");
        setVehicleImage("");
        setProbationalDriversLicense("");

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

function Image() {
  const uploadImage = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "jkctrn41");

    axios
      .post("https://api.cloudinary.com/v1_1/dtfcbfoo0/image/upload", formData)
      .then((resonse) => console.log(response));
  };
  return (
    <div>
      <label>VehicleImage:</label>
      <input
        type="file"
        name="VehicleImage"
        value={vehicleImage}
        onChange={(event) => {
          uploadImage(event.target.files);
        }}
      />
    </div>
  );
}

export default AddVehicle;
