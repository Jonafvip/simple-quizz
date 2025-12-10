import { Link, Navigate } from "react-router-dom";
import "../pages/Menu.css";
import "./Card.css";
import { useAccionContext } from "../context/ContextProvider";

export const Card = ({
  indicePreguntas,
  setIndicePreguntas,
  setPuntaje,
  juegoIniciado,
}) => {
  const { data } = useAccionContext();

  if (!data) {
    return (
      <div className="menu-container">
        <div className="spinner-border text-light" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  const item = data[indicePreguntas];

  const handleClick = (opcionSeleccionada) => {
    const { respuesta } = data[indicePreguntas];

    if (opcionSeleccionada === respuesta) {
      setPuntaje((prev) => prev + 1);
    }
    setIndicePreguntas((prev) => prev + 1);
  };

  if (indicePreguntas >= data.length) {
    return (
      <div className="menu-container">
        <div className="menu-card" style={{ maxWidth: "450px" }}>
          <h2 className="mb-3">¡Prueba Completada!</h2>
          <p className="intro-text">Has respondido todas las preguntas.</p>
          <Link to="/mensajeFinal" className="btn btn-primary start-btn-custom">
            Ver Puntuación 📊
          </Link>
        </div>
      </div>
    );
  }

  if (!juegoIniciado) {
    return <Navigate to="/" />;
  }

  return (
    <div className="menu-container">
      <div className="question-card">
        <span className="badge bg-secondary mb-3 align-self-start">
          Pregunta {indicePreguntas + 1} / {data.length}
        </span>

        <img src={item.imagen} className="question-image" alt="Pregunta" />

        <h5 className="question-title">{item.pregunta}</h5>

        <div className="options-grid">
          {item.opciones.map((opcion, index) => (
            <button
              key={index}
              className="option-btn"
              onClick={() => handleClick(opcion)}
            >
              {opcion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
