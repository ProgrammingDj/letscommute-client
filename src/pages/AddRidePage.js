import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MyRidesPage from "../pages/MyRidesPage";
import RideCard from "../components/RideCard";

const API_URL = "http://localhost:5005";

function AddRidePage(props) {
    const [toCity, setToCity] = useState("");
    const [fromCity, setFromCity] = useState("");
    const [intervalOfRide, setIntervalOfRide] = useState("");
    const [seats, setSeats] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);

  
    const navigate = useNavigate();
  
    const handleToCity = (e) => setToCity(e.target.value);
    const handleFromCity = (e) => setFromCity(e.target.value);
    const handleIntervalOfRide= (e) => setIntervalOfRide(e.target.value);
    const handleSeats = (e) => setSeats(e.target.value);
  
    const handleAddRideSubmit = (e) => {
      e.preventDefault();
      // Create an object representing the request body
      const requestBody = {
        toCity,
        fromCity,
        intervalOfRide,
        seats,
      };
  
      // Make an axios request to the API
      // If the POST request is a successful redirect to the login page
      // If the request resolves with an error, set the error message in the state
      axios
        .post(`${API_URL}/rides/addride`, requestBody)
        .then((response) => {
          navigate("/rides/myrides");
        })
        .catch((error) => {
          const errorDescription = error.response.data.message;
          console.log(errorDescription);
          setErrorMessage(errorDescription);
        });
    };
  
    return (
      <div className="AddRidePage">
        <h1>Add Ride</h1>
  
        <form onSubmit={handleAddRideSubmit}>
          <label>To City:</label>
          <input type="text" name="to City" value={toCity} onChange={handleToCity} />
          <label>From City:</label>
          <input type="text" name="from City" value={fromCity} onChange={handleFromCity} />
  
          <label>Interval of Rides:</label>
          <input
            type="text"
            name="Interval of Rides"
            value={intervalOfRide}
            onChange={handleIntervalOfRide}
          />
          <label>Seats:</label>
          <input
            type="text"
            name="seats"
            value={seats}
            onChange={handleSeats}
          />
          <br/>
  
          <button type="submit">Add Ride</button>
        </form>
  
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    );
  }
  
  export default AddRidePage;
  