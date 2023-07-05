import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function VehicleCard({ vehicle, vehicleImage, id }) {
  return (
    <div className="VehicleCard">
      <Link to={`/rides/${id}`}>
        <p>{vehicle}</p>
        <p>{vehicleImage}</p>
      </Link>
    </div>
  );
}

export default VehicleCard;
