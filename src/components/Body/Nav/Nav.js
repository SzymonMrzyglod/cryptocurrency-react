import {Link} from 'react-router-dom';
import style from './Nav.module.css';
import logo from '../../../assets/images/logo.png';
const Nav = () => {
    return ( 
        <div className={`${style.nav}`}>
            <img src={logo} alt="" className={`${style.logo}`}/>
            <ul className={`${style.navList}`}>
                <li className={`${style.navItem}`}>
                    <Link to="/crypto">Cryptocurrencies</Link>
                </li>
                <li className={`${style.navItem}`}>
                    <Link to="/">News</Link>
                </li>
            </ul>
        </div>
     );
}
 
export default Nav;