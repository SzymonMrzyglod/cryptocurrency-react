import Searchbar from "./Searchbar/Searchbar";
import Best24h from "./Best24h/Best24h";
import style from './Header.module.css';
import Nav from "../Body/Nav/Nav";
import logo from '../../assets/images/logo.png';

const Header = (props) => {
        const bestCrypto = props.crypto.sort((prev, curr)=>{
            return curr.priceChange1d - prev.priceChange1d
        }).slice(0, 5);

    return ( 
        <header>
            <div className={`${style.firstBar}`}>
                <img src={logo} alt="" className={`${style.logo}`}/>
                <Searchbar onSearch={props.onSearch}/>
            </div>
            <div className={`${style.secondBar}`}>
                <p className={`${style.secondBarTitle}`}>Best in shown crypto <i class="fas fa-caret-right"></i></p>
                {bestCrypto.map(coin => (
                <Best24h key={coin.rank} {...coin}/> 
                ))} 
            </div>
            <Nav className={`${style.firstBar}`}/> 
        </header>
     );
}
 
export default Header;