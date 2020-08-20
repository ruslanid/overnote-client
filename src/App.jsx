import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import DashboardPage from "./pages/dashboard/DashboardPage";
import TopBar from "./components/top-bar/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <DashboardPage />
    </div>
  );
}

export default App;
