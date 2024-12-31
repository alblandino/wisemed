import React from "react";
import PatientCard from "./components/PatientCard";

const App = () => {
  const patient = {
    name: "Juan Pérez",
    age: 45,
    diagnosis: "Diabetes Tipo 2",
  };

  const handleDetailsClick = () => {
    alert("Mostrando más detalles del paciente...");
  };

  return (
    <div
      className="is-flex is-justify-content-center is-align-items-center"
      style={{
        height: "100vh",
        backgroundColor: "#242424", // Fondo suave
        padding: "20px",
      }}
    >
      <PatientCard
        name={patient.name}
        age={patient.age}
        diagnosis={patient.diagnosis}
        onDetailsClick={handleDetailsClick}
      />
    </div>
  );
};

export default App;
