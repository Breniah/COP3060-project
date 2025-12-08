import { Link, useNavigate } from "react-router-dom";
import gearIcon from "../icons8-gear-50.png";

export default function Navigation() {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/data">Data Display</Link>
                <Link to="/form">Form Page</Link>
            </div>

            <button
                className="settings-button"
                onClick={() => navigate("/settings")}
            >
                <img src={gearIcon} alt="Settings" className="settings-icon" />
            </button>
        </nav>
    );
}

