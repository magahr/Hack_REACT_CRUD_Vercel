import React from "react";
import { Link } from "react-router-dom";


export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom box-shadow py-3 mb-3">
      <div className="container">   

        <Link className="navbar-brand" to="/">v.2 App Vercel Sin BD</Link>
        {/* ... resto del código ... */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link text-dark" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/formulario">Formulario</Link>
          </li>
        </ul>
        {/* ... resto del código ... */}
      </div>
    </nav>
  );
}
export function Footer() {
    return (
        <footer>
            <div classname = "container p-3 mt-5 border-TOP">
                 <small className="d-block text-muted text-center">&copy;2024 Hact React CRUD</small>
            </div>
        </footer>
    );
}
