import React from "react";
import { useParams, Link } from "react-router-dom";
import RideCard from "../components/RideCard";



function SingleRide(props) {

    const { _id } = useParams();

  if (props.listRides === undefined || props.listRides === null) {
    console.log("This is it:" + props.listRides);
    return <p>looking for a single Ride... moment, I will be right there.</p>;
  } else {

    return (

          <RideCard key={_id}/>

    );
  }
}

export default SingleRide;
