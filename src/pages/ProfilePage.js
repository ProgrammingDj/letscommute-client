import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

function ProfilePage(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profileImage, setProfileImage] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [driver, setDriver] = useState("");
    const [probationaryDriver, setProbationaryDriver] = useState("");

  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/rides/${userId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const profiledata = response.data;
        setName(profiledata.name);
        setEmail(profiledata.email);
        setPassword(profiledata.password);
        setProfileImage(profiledata.profileImage);
        setPhoneNumber(profiledata.PhoneNumber);
        setDriver(profiledata.driver);
        setProbationaryDriver(profiledata.probationaryDriver);

      })
      .catch((error) => console.log(error));
  }, [userId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name, email, password, profileImage, phoneNumber, driver, probationaryDriver};

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    axios
      .put(`${API_URL}/api/rides/${userId}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        navigate(`/rides/${userId}`);
      });
  };

  const deleteProfile = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    axios
      .delete(`${API_URL}/api/rides/${userId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        navigate("/rides");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="ProfilePage">
      <h3>My Profile</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email:</label>
        <textarea
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <textarea
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Profile Image:</label>
        <input
        type="file"
        name="profile Image"
        value={profileImage}
        onChange={(e) => setProfileImage(e.target.value)}
        />

        <label>Phone Number:</label>
        <input
        type="number"
          name="phonenumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <label>Driver:</label>
        <input
        type="text"
          name="driver"
          value={driver}
          onChange={(e) => setDriver(e.target.value)}
        />

        <label>Probational Drivers License:</label>
        <input
        type="text"
          name="probationaryDriversLicense"
          value={probationaryDriver}
          onChange={(e) => setProbationaryDriver(e.target.value)}
        />
        


        <button type="submit">Update Ride</button>
      </form>

      <button onClick={deleteProfile}>Delete Profile</button>
    </div>
  );
}

export default ProfilePage;
