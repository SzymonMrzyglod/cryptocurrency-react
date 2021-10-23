import style from './Nav.module.css'
const Nav = () => {
    return ( 
        <div className={`${style.nav}`}>
            <ul className={`${style.navList}`}>
                <li className={`${style.navItem}`}>
                    <a href="#">Cryptocurrencies</a>
                </li>
                <li className={`${style.navItem}`}>
                    <a href="#">News</a>
                </li>
            </ul>
        </div>
     );
}
 
export default Nav;