import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function RideCard({ toCity, fromCity, intervalOfRide, seats, driver, vehicle, vehicleImage, probationalDriversLicense, id }) {
  return (
    <div className="RideCard card">
      <Link to={`/rides/${id}`}>
          <h1>{toCity}</h1>
          <h1>{fromCity}</h1>
          <p>{intervalOfRide}</p>
          <p>{seats}</p>
          <p>{driver}</p>
          <p>{vehicle}</p>
          <p>{vehicleImage}</p>
          <p>{probationalDriversLicense}</p>
      </Link>
    </div>
  );
}

export default RideCard;
