import { Link } from "react-router-dom";
import "./Menu.css";
export const Menu = ({ setJuegoIniciado }) => {
  return (
    <div className="menu-container">
      <div className="menu-card">
        <header>
          <h1>Simple Quizz 🧠</h1>
          <p className="intro-text">
            ¡Pon a prueba tu conocimiento mundial! <br />
            Historia, ciencia, geografía y más.
          </p>
        </header>

        <section>
          <h2>Reglas del Juego</h2>

          <div className="rules-grid">
            <div className="rule-item">
              <span className="icon">📝</span>
              <span className="rule-label">Preguntas</span>
              <span className="rule-value">10 Items</span>
            </div>
            <div className="rule-item">
              <span className="icon">⏱️</span>
              <span className="rule-label">Tiempo</span>
              <span className="rule-value">Sin Límite</span>
            </div>
            <div className="rule-item">
              <span className="icon">🏆</span>
              <span className="rule-label">Puntos</span>
              <span className="rule-value">+1 Acierto</span>
            </div>
          </div>

          <Link
            to="/card"
            style={{ textDecoration: "none" }}
            onClick={() => setJuegoIniciado(true)}
          >
            <button className="btn btn-primary start-btn-custom">
              🚀 INICIAR AHORA
            </button>
          </Link>

          <p className="note">
            *Al presionar iniciar, el juego comenzará inmediatamente.
          </p>
        </section>
      </div>
    </div>
  );
};
