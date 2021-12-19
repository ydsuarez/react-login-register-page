import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function ForgetPasswordPage() {
    return (
        <div className="text-center m-5-auto">
          
            <form action="/login">
            <h1 className="sizeForn"> BODEGA</h1>
            
            <h5>Resetear Contraseña</h5>
         
                <p>
                    
                    <input placeholder="correo electrónico" type="email" name="email" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Enviar al correo contraseña</button>
                </p>
                <p ><Link to="/register" className="colorLink">Crear cuenta</Link></p>
                <p><Link to="/" className="colorLink">Ir al Sitio</Link></p>
            </form>
            <footer>
               
            </footer>
        </div>
    )
}
