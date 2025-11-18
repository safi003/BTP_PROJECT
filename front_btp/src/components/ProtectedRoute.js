import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  // console.log("token detecte dans protected route", token);
  
  // Vérification plus robuste du token
  if (!token || token === 'null' || token === 'undefined') {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

export default ProtectedRoute;