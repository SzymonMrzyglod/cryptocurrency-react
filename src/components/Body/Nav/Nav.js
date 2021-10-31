import {Link} from 'react-router-dom';
import style from './Nav.module.css';

const Nav = () => {
    return ( 
        <div className={`${style.nav}`}>
            <ul className={`${style.navList}`}>
                <li className={`${style.navItem}`}>
                    <Link to="/">Cryptocurrencies</Link>
                </li>
                <li className={`${style.navItem}`}>
                    <Link to="/news">News</Link>
                </li>
            </ul>
        </div>
     );
}
 
export default Nav;