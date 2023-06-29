import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import EditProjectPage from "./pages/EditProjectPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/isPrivate";
import IsAnon from "./components/isAnon";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/explore"
          element={
            <IsPrivate>
              {" "}
              <ExplorePage />{" "}
            </IsPrivate>
          }
        />

        <Route
          path="/projects/:projectId"
          element={
            <IsPrivate>
              {" "}
              <ProjectDetailsPage />{" "}
            </IsPrivate>
          }
        />

        <Route
          path="/projects/edit/:projectId"
          element={
            <IsPrivate>
              {" "}
              <EditProjectPage />{" "}
            </IsPrivate>
          }
        />

        <Route
          path="/signup"
          element={
            <IsAnon>
              {" "}
              <SignupPage />{" "}
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              {" "}
              <LoginPage />{" "}
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
