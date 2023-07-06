import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

function AddVehicle(props) {
  const [vehicle, setVehicle] = useState("");
  const [vehicleImage, setVehicleImage] = useState("");

  const navigate = useNavigate();

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
      rideId,
    };

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/api/vehicle`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setVehicle("");
        setVehicleImage("");
        navigate("/rides/addride");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="addVehicle">
      <h2>ADD VEHICLE</h2>
      <form onSubmit={handleSubmit}>
        <label>Vehicle:</label>
        <input
          name="vehicle"
          value={vehicle}
          placeholder="Enter the make of your car"
          onChange={(e) => setVehicle(e.target.value)}
        />

        <label>VehicleImage:</label>
        <input
          type="file"
          name="vehicleImage"
          value={vehicleImage}
          onChange={(e) => setVehicleImage(e.target.value)}
        />

        <button className="submit" type="submit">Add Vehicle</button>
      </form>
    </div>
  );
}

// function Image() {
//   const uploadImage = (files) => {
//     const formData = new FormData();
//     formData.append("file", files[0]);
//     formData.append("upload_preset", "jkctrn41");

//     axios
//       .post("https://api.cloudinary.com/v1_1/dtfcbfoo0/image/upload", formData)
//       .then((resonse) => console.log(response));
//   };
//   return (
//     <div>
//       <label>VehicleImage:</label>
//       <input
//         type="file"
//         name="VehicleImage"
//         value={vehicleImage}
//         onChange={(event) => {
//           uploadImage(event.target.files);
//         }}
//       />
//     </div>
//   );
// }

export default AddVehicle;
