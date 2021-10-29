import Searchbar from "./Searchbar/Searchbar";
import Best24h from "./Best24h/Best24h";
import style from './Header.module.css';

const Header = (props) => {
        const bestCrypto = props.crypto.sort((prev, curr)=>{
            return curr.priceChange1d - prev.priceChange1d
        }).slice(0, 5);

    return ( 
        <header>
            <Searchbar onSearch={props.onSearch}/>
            <div className={`${style.bar}`}>
                <p>Best in show crypto:</p>
                {bestCrypto.map(coin => (
                <Best24h key={coin.rank} {...coin}/> 
                ))}
            </div>
        </header>
     );
}
 
export default Header;