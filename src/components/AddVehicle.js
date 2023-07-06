import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import service from "../api/service";

const API_URL = "http://localhost:5005";

function AddVehicle(props) {
  const [vehicle, setVehicle] = useState("");
  const [vehicleImage, setVehicleImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const navigate = useNavigate();

  // ******** this method handles the file upload ********
  const handleFileUpload = (e) => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();

    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new movie in '/api/movies' POST route
    uploadData.append("imageUrl", e.target.files[0]);

    service
      .uploadImage(uploadData)
      .then((response) => {
        // console.log("response is: ", response);
        // response carries "fileUrl" which we can use to update the state
        setImageUrl(response.fileUrl);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // We need the project id when creating the new task
    const { rideId } = props;
    // Create an object representing the body of the POST request
    const requestBody = {
      vehicle,
      imageUrl,
      rideId,
    };

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/api/vehicle`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setVehicle("");
        setImageUrl("");
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
          onChange={(e) => handleFileUpload(e)}
        />

        <button className="submit" type="submit">
          Add Vehicle
        </button>
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
