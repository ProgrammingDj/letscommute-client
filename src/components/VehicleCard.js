import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function VehicleCard({ driver, vehicle, vehicleImage, probationalDriversLicense, id }) {
  return (
    <div className="VehicleCard">
      <Link to={`/rides/${id}`}>
          <p>{driver}</p>
          <p>{vehicle}</p>
          <p>{vehicleImage}</p>
          <p>{probationalDriversLicense}</p>
      </Link>
    </div>
  );
}

export default VehicleCard;
