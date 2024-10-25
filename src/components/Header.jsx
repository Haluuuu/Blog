import { Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar el menú desplegable
    const dropdownRef = useRef(null); // Referencia al menú desplegable

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Función para cerrar el menú al hacer clic fuera de él
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    // useEffect para agregar y limpiar el manejador de eventos
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header>
         
            <nav>
                
                <Link className="button" to="/">Inicio</Link>
                <Link className="button" to="/Sintomas">Sintomas</Link>
                
                <div className="dropdown" ref={dropdownRef}>
                    <button className="dropdown-button" onClick={toggleMenu}>
                        Más Opciones ≡
                    </button>
                    {isOpen && (
                        <div className="dropdown-menu">
                            <Link className="dropdown-item" to="/Afectados">Afectados</Link>
                            <Link className="dropdown-item" to="/Historia">Historia</Link>
                            <Link className="dropdown-item" to="/Tramientos">Tratamientos</Link>
                            <Link className="dropdown-item" to="/Acerca">Acerca de</Link>
                        </div>
                    )}
                </div>
            </nav>
              <h1 >LA ESQUIZOFRENIA UN TRANSTORNO MENTAL</h1>
        </header>
    );
};

export default Header;
