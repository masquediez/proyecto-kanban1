import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./login.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [clickCount, setClickCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Benutzername:", username);
    console.log("Passwort:", password);
    console.log("Eingeloggt bleiben:", rememberMe);
  };
  // Funtion Loading 3 sec
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div>Laden...</div>;
  }

  // Función  botón "Anmelden" mit count
  const handleLoginClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Benutzername:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Passwort:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Eingeloggt bleiben
          </label>
        </div>
        {/* Botón "Anmelden" con el contador */}
        <button type="submit" onClick={handleLoginClick}>
          Anmelden ({clickCount})
        </button>
      </form>
      <div>
        Noch kein Konto? <Link to="/register">Registrieren</Link>
      </div>
    </div>
  );
};

export default LoginPage;
