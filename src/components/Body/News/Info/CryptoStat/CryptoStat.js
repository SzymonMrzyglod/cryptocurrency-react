import {ChangePriceStyle, PriceArrow} from '../../../../../utils/changePriceStyle/changePriceStyle';
import style from './CryptoStat.module.css';

const CryptoStat = (props) => {
    return ( 
        <div className={`${style.stats}`}>
        <p className={`${style.coin}`}>{props.coinTitleKeyWords}</p>
        <p className={ChangePriceStyle(props.coinPercent)}>
            {PriceArrow(props.coinPercent)} {props.coinPercent}%</p>
        </div>
     );
}
 
export default CryptoStat;