import logo from '../ressources/LOGO.png'
import '../style/header.css'

function banner() {
    return (
        <><div className='header'><div className="logo"><img src={logo} alt="logo" />
            <div className="menu_header"><h1 className="menu">Accueil</h1>
            <h1 className="menu">A propos</h1>
            </div>
            </div>
            </div></>
        );
};
export default banner