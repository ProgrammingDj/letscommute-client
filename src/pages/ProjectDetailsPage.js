import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import AddTask from "../components/AddTask";
import TaskCard from "../components/TaskCard";

const API_URL = "http://localhost:5005";

function RideDetailsPage(props) {
  const [ride, setRide] = useState(null);
  const { rideId } = useParams();

  const getRide = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URL}/api/rides/${rideId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneRide = response.data;
        setRide(oneRide);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getRide();
  }, []);

  return (
    <div className="RideDetails">
      {ride && (
        <>
          <h1>{ride.title}</h1>
          <p>{ride.description}</p>
        </>
      )}

      <AddTask refreshRide={getRide} rideId={rideId} />

      {ride && ride.tasks.map((task) => <TaskCard key={task._id} {...task} />)}

      <Link to="/explore">
        <button>Back to explore</button>
      </Link>

      <Link to={`/explore/edit/${rideId}`}>
        <button>Edit Ride</button>
      </Link>
    </div>
  );
}

export default ProjectDetailsPage;
