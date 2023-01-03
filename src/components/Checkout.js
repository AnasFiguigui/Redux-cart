import { useState } from "react";
import { Link } from 'react-router-dom'
import '../styles/checkout.css'


const Checkout =()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        
        event.preventDefault();
        if(!alert(`
        ${name}, votre commande est terminée avec succès. ✅

        Pour plus d'informations consultez votre e-mail:
        ${email}
        `)){
            window.location.href = "/"
        }

      }

    return(
            <div className='body'>
                    <div className="shadoww-from"></div>
        <div className="container-from">
            <div className="image-from"></div>
            <div className="content-from">
                <form  onSubmit={handleSubmit}>
                    <div>
                        <input type="text" name="text" placeholder="Full name" onChange={(e) => setName(e.target.value)} required />
                        <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                        <input type="password" name="password" placeholder="Mot de passe" required/>
                    </div>
                    <button type="submit">Connexion</button>
                </form>
                <p><Link to="/">Ajouter d'autre items ?</Link></p>
            </div> 
        </div>
            </div>
    )
}
export default Checkout