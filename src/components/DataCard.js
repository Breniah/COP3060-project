import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav style={{ padding: "10px", background: "#f0f0f0" }}>
      <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
      <Link to="/data" style={{ marginRight: "15px" }}>Data Display</Link>
      <Link to="/form">Form Page</Link>
    </nav>
  );
}
