import logo from '../ressources/LOGO.png'
import '../style/header.css'
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <><div className='header'><div className="logo"><img src={logo} alt="logo" />
            <div className="menu_header"><Link to={`/kasa`}><h1 className="menu">Accueil</h1></Link>
            <Link to={`/about`}><h1 className="menu">A propos</h1></Link>
            </div>
            </div>
            </div></>
        );
};
export default Banner