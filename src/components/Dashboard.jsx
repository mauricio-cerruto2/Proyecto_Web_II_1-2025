import React from "react";

export default function Dashboard({ user, onLogout }) {
    if (!user) return <h2>Acceso denegado</h2>;
    return (
        <div>
            <h2>Bienvenido {user.name}</h2>
            <button onClick={onLogout}>Cerrar Sesion</button>
        </div>
    );
}