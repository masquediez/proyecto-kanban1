import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./login.css";

const LoginPage = () => {
  // Zustandsvariablen für Benutzername, Passwort und "Eingeloggt bleiben"-Checkbox
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Funktion zum Verarbeiten des Formulars beim Absenden
  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier kannst du die Logik für die Überprüfung der Anmeldeinformationen implementieren
    console.log("Benutzername:", username);
    console.log("Passwort:", password);
    console.log("Eingeloggt bleiben:", rememberMe);

    // Beispiel: Überprüfen der Anmeldeinformationen und Weiterleitung zu einer anderen Seite
    // history.push('/dashboard');
  };

  const [loading, setLoading] = useState(true); // Zustand für Ladezustand der Seite

  useEffect(() => {
    // Verzögerung von 3 Sekunden, bevor die Seite als geladen markiert wird
    const timer = setTimeout(() => {
      setLoading(false); // Markiere die Seite als geladen nach 3 Sekunden
    }, 3000);

    // Aufräumen, um das Timeout zu entfernen, wenn die Komponente unmontiert wird
    return () => clearTimeout(timer);
  }, []); // Leeres Abhängigkeitsarray, um sicherzustellen, dass dieser Effekt nur einmal ausgeführt wird

  if (loading) {
    return <div>Laden...</div>; // Zeige eine Ladeanzeige, solange die Seite noch lädt
  }

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
        <button type="submit">Anmelden</button>
      </form>
      <div>
        Noch kein Konto? <Link to="/register">Registrieren</Link>
      </div>
    </div>
  );
};

export default LoginPage;
