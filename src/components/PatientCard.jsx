import React from "react";

const PatientCard = ({ name, age, diagnosis, onDetailsClick }) => {
  return (
    <div className="card" style={{ width: "100%", maxWidth: "400px" }}>
      <header className="card-header">
        <p className="card-header-title has-text-weight-bold has-text-link">
          {name}
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          <p>
            <strong>Edad:</strong> {age}
          </p>
          <p>
            <strong>Diagnóstico:</strong> {diagnosis}
          </p>
        </div>
      </div>
      <footer className="card-footer">
        <button
          className="button is-link is-light card-footer-item"
          onClick={onDetailsClick}
        >
          Más detalles
        </button>
      </footer>
    </div>
  );
};

export default PatientCard;
