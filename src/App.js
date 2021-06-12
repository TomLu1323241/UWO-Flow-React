import { NavBar } from "./components/NavBar";
import "./App.css";
import { LandingPage } from "./components/LandingPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // needs to return nav-bar, body then footer
  return (
    <>
      <NavBar />
      <LandingPage />
    </>
  );
}

export default App;
