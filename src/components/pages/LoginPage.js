import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignInPage() {
    return (
        <div className="text-center ">
            
            <form action="/home" >
            <h1 className="sizeForn"> BODEGA
            
            </h1>
            <br/>
                 <p>                
                   <input  placeholder="Núcleo" type="text" name="first_name" required />
                </p>
                <br/>
                <p>
                    
                    <input placeholder="Usuario" type="text" name="first_name" required />
                </p>
                <br/>
                <p>                    
                    <input type="password" placeholder="Contraseña"  name="password" required />
                </p>
                <br/>
                
                <p>
                    <button id="sub_btn" type="submit">Entrar</button>
                </p>
               
                
            </form>
            <footer>
            <p id="colorLink">
                <Link to="/forget-password"  className="colorLink">Recordar Contraseña</Link>
                </p>
                <p ><Link to="/register"  className="colorLink">Crear cuenta</Link>.</p>
                <p ><Link to="/"  className="colorLink">Ir al Sitio</Link>.</p>  
               </footer>
        </div>
    )
}
