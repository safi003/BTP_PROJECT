import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import "../styles/login.css";

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/login", { email, password });
      console.log("reponse complete", response)

      if (response.data.token) {
        localStorage.setItem("token", response.data.token); // Sauvegarde du token
        navigate("/admin");
      } else {
        setMessage("Identifiants invalides");
      }
    } catch (error) {
      console.error(error);
      setMessage("Erreur de connexion");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Connexion Admin</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Se connecter</button>
        </form>
        {message && <p className="error">{message}</p>}
      </div>
    </div>
  );
}

export default AdminLogin;