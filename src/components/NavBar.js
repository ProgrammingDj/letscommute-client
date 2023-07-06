import "./NavBar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  //  Update the rendering logic to display different content
  //  depending on whether the user is logged in or not
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="../images/logo2.png" alt="React Image" />
        </Link>
      </div>
      <div className="menu">
        <span>
          {user && <span className="greetUser">Hi, {user.name}</span>}
        </span>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>

      {isLoggedIn && (
        <>
          <div class="dropdown">
            <button class="dropbtn">
              Rides
              <i class="fa fa-caret-down"></i>
            </button>
            <div className="menu">
              <div class="dropdown-content">
                <Link to="/rides">
                  <>Explore</>
                </Link>
                <Link to="/rides/myrides">
                  <>My Rides</>
                </Link>

                <Link to="/rides/addvehicle">
                  <>Add Vehicle</>
                </Link>
                <Link to="/rides/addride">
                  <>Add Ride</>
                </Link>
              </div>
            </div>
          </div>
          <div className="menu">
            <button onClick={logOutUser}>Logout</button>
          </div>
        </>
      )}

      {!isLoggedIn && (
        <>
          <div className="menu">
            <Link to="/signup">
              <button>Sign Up</button>
            </Link>
          </div>
          <div className="menu">
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
