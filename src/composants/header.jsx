import logo from '../ressources/LOGO.png'
import '../style/header.css'
import { Link } from 'react-router-dom';

function Banner({ underline, lineThrough }) {
    const homeStyles = {
        textDecoration: underline ? 'underline' : 'none',
      };
      const aboutStyles = {
        textDecoration: lineThrough ? 'underline' : 'none',
      };
      
    return (
        
        <><div className='header'>
          <div className="logo">
            <img src={logo} alt="logo" />
            </div>
            <div className="menu_header"><Link className="link" style={homeStyles} to={`/kasa`}><h1 className="menu_home">Accueil</h1></Link>
            <Link className="link" style={aboutStyles} to={`/about`}><h1 className="menu_about">A propos</h1></Link>
            
            </div>
            </div></>
        );
};
export default Banner