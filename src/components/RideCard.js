import { Link } from "react-router-dom";

function RideCard({ toCity, fromCity, intervalOfRides, vehicle, _id }) {
  console.log(toCity);
  return (
    <Link to={`/rides/${_id}`}>
      <div className="RideCard card">
        <h1 className="">
          <span>{fromCity}</span> → <span>{toCity}</span>
        </h1>
        <p>{intervalOfRides}</p>
        <img className="image" src={vehicle.imageUrl} alt="image of vehicle" />
      </div>
    </Link>
  );
}

export default RideCard;
