import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import DataDisplayPage from "./pages/DataDisplayPage";
import FormPage from "./pages/FormPage";
import HealthContentPage from "./pages/Healthcontent";
import SettingsPage from "./pages/SettingsPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import SelfCarePage from "./pages/SelfCarePage";


function App() {
  return (
    <Router>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/data" element={<DataDisplayPage />} />
        <Route path="/form" element={<FormPage />} />
          <Route path="/health" element={<HealthContentPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/self-care" element={<SelfCarePage />} />

          


      </Routes>
    </Router>
  );
}

export default App;
