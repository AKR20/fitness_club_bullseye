import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FitnessClubRegistrationForm from "./FitnessClubRegistrationForm";
import MemberList from "./MemberList";

function App() {
  return (
    <Router>
      <Route exact path="/" component={FitnessClubRegistrationForm} />
      <Route path="/members" component={MemberList} />
    </Router>
  );
}

export default App;
