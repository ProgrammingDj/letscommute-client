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
        <p>{vehicle?.vehicle}</p>
        Click for details
      </div>
    </Link>
  );
}

export default RideCard;
