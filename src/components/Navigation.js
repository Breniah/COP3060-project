import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/data">Data Display</Link>
      <Link to="/form">Form Page</Link>
    </nav>
  );
}
