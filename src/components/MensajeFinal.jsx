import { useAccionContext } from "../context/ContextProvider";
import { Link, Navigate } from "react-router-dom";
import "../pages/Menu.css";

export const MensajeFinal = ({
  indicePreguntas,
  puntaje,
  setIndicePreguntas,
  setPuntaje,
  juegoIniciado,
}) => {
  const { data } = useAccionContext();

  if (!juegoIniciado) {
    return <Navigate to="/" />;
  }

  const reiniciarJuego = () => {
    setIndicePreguntas(0);
    setPuntaje(0);
  };

  return (
    <>
      {indicePreguntas >= data.length && (
        <div className="menu-container">
          <div className="menu-card">
            <h1 className="display-5 mb-4">Juego Terminado</h1>
            <p className="intro-text">Tu Puntaje final es:</p>

            <div style={{ margin: "20px 0" }}>
              <span
                style={{
                  fontSize: "4rem",
                  fontWeight: "bold",
                  color: "#667eea",
                }}
              >
                {puntaje}
              </span>
              <span style={{ fontSize: "2rem", color: "#a0aec0" }}>
                / {data.length}
              </span>
            </div>

            <div className="mb-4">
              {puntaje === 10 && (
                <h3 className="text-success">🎉 ¡Puntaje Perfecto! 🏆</h3>
              )}
              {puntaje > 5 && puntaje < 10 && (
                <h3 className="text-primary">¡Tienes Conocimiento! 🧠</h3>
              )}
              {puntaje <= 5 && (
                <h3 className="text-danger">¡Te falta mucho pibe! 👽</h3>
              )}
            </div>

            <Link
              to="/"
              className="btn btn-primary start-btn-custom"
              onClick={reiniciarJuego}
            >
              🔄 Volver al inicio
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
