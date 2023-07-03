import { Link } from "react-router-dom";

function RideCard({ toCity, fromCity, intervalOfRide, _id }) {
  return (
    <div className="RideCard card">
      <Link to={`/rides/${_id}`}>
          <h1>{toCity}</h1>
          <h1>{fromCity}</h1>
          <p>{intervalOfRide}</p>

      </Link>
    </div>
  );
}

export default RideCard;
