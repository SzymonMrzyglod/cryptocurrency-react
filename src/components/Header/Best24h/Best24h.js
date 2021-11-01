import {ChangePriceStyle, PriceArrow} from '../../../auxFunctions/changePriceStyle/changePriceStyle';
import style from './Best24h.module.css';

const Best24h = (props) => {

    return ( 
             <div className={`${style.coin}`}>
                <img src={props.icon} alt="icon" className={`${style.icon}`}/>
                <h1 className={`${style.symbol}`}>{props.symbol}</h1>
                <p className={ChangePriceStyle(props.priceChange1d)}>{PriceArrow(props.priceChange1d)} {props.priceChange1d.toFixed(2)}%</p>
            </div>
     );
};
 
export default Best24h;