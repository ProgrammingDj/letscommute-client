import React from "react";
import { useParams, Link } from "react-router-dom";




function SingleRide(props) {

    const { _id } = useParams();

  if (props.listRides === undefined || props.listRides === null) {
    console.log("This is it:" + props.listRides);
    return <p>looking for a single Ride... moment, I will be right there.</p>;
  } else {

    const filteredRides = props.listRides.filter((ride) => {
        console.log(props.listRides)
        console.log(ride._id.includes(_id))
      return ride._id.includes(_id);
    });

    if (filteredRides.length === 0) {
        return <p>Ride not found.</p>;
      }

    const ride = filteredRides[0];

    return (
      <div>
        <div className="homebox">
        </div>
        <div className="ridebox">
          <div>
            <Link to={`/rides/${ride._id}`}>
              {/* <div className="ridesbox-2">
                <img
                  src={ride.image_url}
                  alt={ride.fromCi}
                  width="200px"
                  height="500px"
                />
              </div> */}
              <div className="ridebox-2">
                <h2>{ride.toCity}</h2> <br />
                <p>{ride.fromCity}</p> <br />
                {ride.intervalOfRides} <br />
                {ride.driver} <br />
                {ride.vehicle} <br />
                {ride.probationaryDriversLicense} <br />
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleRide;
