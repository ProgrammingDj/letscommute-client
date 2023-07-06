import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

function SignupPage(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [driver, setDriver] = useState("");
  const [probationaryDriver, setProbationaryDriver] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleProfileImage = (e) => setProfileImage(e.target.value);
  const handlePhoneNumber = (e) => setPhoneNumber(e.target.value);
  const handleDriver = (e) => setDriver(e.target.value);
  const handleProbationaryDriver = (e) => setProbationaryDriver(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = {
      name,
      email,
      password,
      profileImage,
      phoneNumber,
      driver,
      probationaryDriver,
    };

    // Make an axios request to the API
    // If the POST request is a successful redirect to the login page
    // If the request resolves with an error, set the error message in the state
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        console.log(errorDescription);
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="signupPage">
      <h1>Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        <label>Phone number:</label>
        <input
          type="number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumber}
        />

        <label for="driver">Driver:</label>
        <select
          id="driver"
          name="driver"
          size="1"
          onChange={(e) => setDriver(e.target.value)}
          value={driver}
        >
          <option>Are you a driver?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <label for="probationaryDriver">Probationary driver:</label>
        <select
          id="probationaryDriver"
          name="probationaryDriver"
          size="1"
          onChange={(e) => setProbationaryDriver(e.target.value)}
          value={probationaryDriver}
        >
          <option>Probationary driver?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <br />

        <button className="submit" type="submit">
          Sign Up
        </button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have an account?</p>
      <Link to={"/login"}> Login here</Link>
    </div>
  );
}

export default SignupPage;
