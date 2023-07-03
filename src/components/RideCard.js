import { Link } from "react-router-dom";

function RideCard({ toCity, fromCity, intervalOfRides, vehicle, _id }) {
  console.log(toCity);
  return (
    <div className="RideCard card">
      <h1>
        <span>{toCity}</span> 🚙 <span>{fromCity}</span>
      </h1>
      <p>{intervalOfRides}</p>
      <p>{vehicle.vehicle}</p>
      <Link to={`/rides/${_id}`}>Details</Link>
    </div>
  );
}

export default RideCard;
