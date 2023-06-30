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
        <span>{user && <span className="greetUser">Hi, {user.name}</span>}</span>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>

      {isLoggedIn && (
        <>
          <div className="menu">
            <Link to="/rides">
              <button>Explore</button>
            </Link>
          </div>
          <div className="menu">
            <Link to="/rides/addride">
              <button>Add Ride</button>
            </Link>
          </div>
          <div className="menu">
            <Link to="/rides/myrides">
              <button>My Rides</button>
            </Link>
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
