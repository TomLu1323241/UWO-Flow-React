import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from "./components/NavBar";
import { LandingPage } from "./components/LandingPage";
import { CourseBody } from "./components/CourseBody";

import { routePath, routePathID } from "./components/constants.js";

function App() {
  // TODO: needs to return nav-bar, body then footer
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path={`/${routePath.course}/:${routePathID.course}`}>
          <CourseBody />
        </Route>
        <Route path='/'>
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
