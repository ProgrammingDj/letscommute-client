import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function RideCard({ title, description, _id }) {
  return (
    <div className="RideCard card">
      <Link to={`/rides/${_id}`}>
        <h3>{title}</h3>
      </Link>
      <p style={{ maxWidth: "400px" }}>{description} </p>
    </div>
  );
}

export default RideCard;
