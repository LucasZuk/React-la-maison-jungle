import { render } from "@testing-library/react";
import react, {useState} from "react";

function Footer () {

    const[email, setEmail] = useState('');

    return(
        <footer className="lmj-footer">
            <form className="lmj-footer-elem">
                <caption>Votre adresse mail</caption><input type="text" placeholder="Votre adresse mail" onChange={(e) => setEmail(e.target.value)} onBlur={() => {
                    email.includes('@') ? alert(`Votre email "${email}" a bien été validé !`) : alert(`Votre email n'est pas conforme !`)
                    }}/>
            </form>
        </footer>
    )
}


export default Footer;