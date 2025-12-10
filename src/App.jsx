import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Menu } from "./pages/Menu";
import { ContextProvider } from "./context/ContextProvider";
import { useState } from "react";
import { MensajeFinal } from "./components/MensajeFinal";

function App() {
  const [indicePreguntas, setIndicePreguntas] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [juegoIniciado, setJuegoIniciado] = useState(false);

  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Menu setJuegoIniciado={setJuegoIniciado} />}
            />
            <Route
              path="/card"
              element={
                <Card
                  indicePreguntas={indicePreguntas}
                  setIndicePreguntas={setIndicePreguntas}
                  puntaje={puntaje}
                  setPuntaje={setPuntaje}
                  juegoIniciado={juegoIniciado}
                />
              }
            />
            <Route
              path="/mensajeFinal"
              element={
                <MensajeFinal
                  indicePreguntas={indicePreguntas}
                  puntaje={puntaje}
                  setIndicePreguntas={setIndicePreguntas}
                  setPuntaje={setPuntaje}
                  juegoIniciado={juegoIniciado}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
