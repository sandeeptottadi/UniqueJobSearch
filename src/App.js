import "./App.css";
import React from "react";
import { AuthContext } from "./Context/authContext";
import Router from "./Router/Router";

function App() {
  return (
    <AuthContext.Provider className="App">
      <Router />
    </AuthContext.Provider>
  );
}

export default App;
