import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.js";
import About from "./pages/About";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Default from "./pages/Default";
import LoginPage from "./pages/Login-seite";

function App() {
  return (
    <div className="App">
      <h1></h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<Default />} />
          <Route path="Login-seite" element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
