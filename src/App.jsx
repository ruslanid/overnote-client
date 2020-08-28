import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

import DashboardPage from "./pages/dashboard/DashboardPage";
import AuthPage from "./pages/auth/AuthPage";
import ProfilePage from "./pages/profile/ProfilePage";
import TopBar from "./components/top-bar/TopBar";

function App() {
  return (
    <div className="App">
      {/* <TopBar /> */}
      <Switch>
        <Route path="/categories/:id" component={DashboardPage} />
        <Route path="/auth" component={AuthPage} />
        <Route path="/profile" component={ProfilePage} />
        <Redirect exact from="/" to="/categories/0" />
        <Redirect to="/categories/0" />
      </Switch>
    </div>
  );
}

export default App;
