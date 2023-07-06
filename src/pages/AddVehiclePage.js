import { useState, useEffect } from "react";
import axios from "axios";
import AddVehicle from "../components/AddVehicle";

const API_URL = "http://localhost:5005";

function AddVehiclePage() {
  return (
    <div className="listRides">
      <AddVehicle refreshRides={getAllRides} />
    </div>
  );
}

export default AddVehiclePage;
