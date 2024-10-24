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
           <h1 >La Esquizofrenia un Transtorno Mental</h1>
            <nav>
                
                <Link className="button" to="/">Home</Link>
                <Link className="button" to="/blog">Blog</Link>
                <div className="dropdown" ref={dropdownRef}>
                    <button className="dropdown-button" onClick={toggleMenu}>
                        Más Opciones ≡
                    </button>
                    {isOpen && (
                        <div className="dropdown-menu">
                            <Link className="dropdown-item" to="/about">Tratamientos</Link>
                            <Link className="dropdown-item" to="/contact">Sintomas</Link>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
