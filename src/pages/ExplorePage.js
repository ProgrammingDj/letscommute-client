import { useState, useEffect } from "react";
import axios from "axios";
import RideCard from "../components/RideCard";

const API_URL = "http://localhost:5005";

function ListRides(props) {
    <div className="homebox">
    </div>
    if (props.ListRides === undefined || props.ListRides === null) {
        console.log("This is it:" + props.ListRides)
        return <p>loading the Rides </p>
    } else {
        return  props.ListRides.map((rideValue) => {
            console.log("This is it:" + rideValue)
            return (
                <div key={rideValue.id} className="rideCard">
                <div >
                    <RideCard/>
                </div>
                </div>

            )
        })
    }

}

export default ListRides;