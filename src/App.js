import React, { useState, useEffect } from "react";
import "./App.css";
import AuthState from "./context/auth/AuthState";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <AuthState>
      <div>
        <AppRouter />
      </div>
     </AuthState> 
  );
}

export default App;
