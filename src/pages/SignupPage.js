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
      .post(`${API_URL}/auth/signup`, requestBody)
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
        <input 
        type="text" 
        name="name" 
        value={name} 
        onChange={handleName} 
        />

        <label>Email:</label>
        <input 
        type="email" 
        name="email" 
        value={email} 
        onChange={handleEmail} 
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        <label>Profile image:</label>
        <input
          type="file"
          name="profileImage"
          value={profileImage}
          onChange={handleProfileImage}
        />
        <label>Phone number:</label>
        <input
          type="number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumber}
        />

        <label>Driver:</label>
        <input
          type="text"
          name="driver"
          value={driver}
          onChange={handleDriver}
        />

        <label>Probationary driver:</label>
        <input
          type="text"
          name="probationaryDriver"
          value={probationaryDriver}
          onChange={handleProbationaryDriver}
        />

        <br/>

        <button type="submit">Sign Up</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
    </div>
  );
}

export default SignupPage;
