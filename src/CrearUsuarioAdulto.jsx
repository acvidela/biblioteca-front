import React, { useState } from "react";
import "./CrearUsuarioAdulto.css";
import { FaKey } from "react-icons/fa"; // Usa react-icons para el icono de la llave

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={toggleDropdown}>
        <FaKey className="dropdown-icon" />
        <p>¿Quieres crear una cuenta?</p>
      </button>
      {isOpen && <div className="dropdown-content"></div>}
    </div>
  );
};

export default DropdownButton;
