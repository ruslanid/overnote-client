import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

import DashboardPage from "./pages/dashboard/DashboardPage";
import ProfilePage from "./pages/profile/ProfilePage";
import TopBar from "./components/top-bar/TopBar";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/signup/SignupPage";

function App() {
  return (
    <div className="App">
      {/* <TopBar /> */}
      <Switch>
        <Route path="/categories/:id" component={DashboardPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/profile" component={ProfilePage} />
        <Redirect exact from="/" to="/categories/0" />
        <Redirect to="/categories/0" />
      </Switch>
    </div>
  );
}

export default App;
