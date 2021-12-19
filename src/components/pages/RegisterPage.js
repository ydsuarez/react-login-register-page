import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignUpPage() {

    return (
        <div className="text-center">
        
            <form action="/home">
            <h1 className="sizeForn"> BODEGA
            
            </h1>
            
        
            <h5>Crear Cuenta</h5>
                <p>
                    <br/>
                    <input type="text"  placeholder="Usuario" name="first_name" required />
                </p>
                <br/>
                <p>                    
                    <input type="email" placeholder="Email" name="email" required />
                </p>
                <br/>
                <p>                
                    <input type="password" placeholder="Contraseña" name="password" requiredc />
                </p>
                <br/>
                <p>                
                    <input type="password" placeholder="Confirmar Contraseña" name="password" requiredc />
                </p>
                <br/>
                <p>
                    <button id="sub_btn" type="submit">Registrar</button>
                </p>
            </form>
            <footer>
    
                <p ><Link to="/"  className="colorLink">Ir al Sitio</Link></p>  
               
               </footer>
        </div>
    )

}
