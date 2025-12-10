import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <nav className="navbar-custom">
      <Link className="logo-container" to="/">
        <span className="logo-icon">🧠</span>
        <span className="logo-text">Simple Quizz</span>
      </Link>
    </nav>
  );
};
