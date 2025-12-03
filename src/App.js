import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import DataDisplayPage from "./pages/DataDisplayPage";
import FormPage from "./pages/FormPage";
import HealthContentPage from "./pages/Healthcontent";


function App() {
  return (
    <Router>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/data" element={<DataDisplayPage />} />
        <Route path="/form" element={<FormPage />} />
          <Route path="/health" element={<HealthContentPage />} />

      </Routes>
    </Router>
  );
}

export default App;
