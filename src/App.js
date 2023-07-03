import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import RideDetailsPage from "./pages/RideDetailsPage";
import EditRidePage from "./pages/EditRidePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/isPrivate";
import IsAnon from "./components/isAnon";
import AddRidePage from "./pages/AddRidePage";
import MyRidesPage from "./pages/MyRidesPage"
import ProfilePage from "./pages/ProfilePage";
import AddVehiclePage from "./components/AddVehicle";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/rides"
          element={
            <IsPrivate>
              <ExplorePage />
            </IsPrivate>
          }
        />

        <Route
          path="/rides/addvehicle"
          element={
            <IsPrivate>
              <AddVehiclePage />
            </IsPrivate>
          }
        />
        
        <Route
          path="/rides/addride"
          element={
            <IsPrivate>
              <AddRidePage />
            </IsPrivate>
          }
        />



        <Route
          path="/rides/myrides"
          element={
            <IsPrivate>
              <MyRidesPage />
            </IsPrivate>
          }
        />



        <Route
          path="/profile/"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />

        <Route
          path="/rides/:ridesId"
          element={
            <IsPrivate>
              <RideDetailsPage />
            </IsPrivate>
          }
        />
        
        <Route
          path="/rides/edit/:ridesId"
          element={
            <IsPrivate>
              <EditRidePage />
            </IsPrivate>
          }
        />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
