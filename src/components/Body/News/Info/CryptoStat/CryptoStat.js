import {ChangePriceStyle, PriceArrow} from '../../../../../utils/changePriceStyle/changePriceStyle';
import style from './CryptoStat.module.css';

const CryptoStat = (props) => {
    return ( 
        <div className={`${style.stats}`}>
            <div className={`${style.coin}`}>{props.coinTitleKeyWords}</div>
            <div className={ChangePriceStyle(props.coinPercent)}>
                {PriceArrow(props.coinPercent)} {props.coinPercent}%
            </div>
        </div>
     );
}
 
export default CryptoStat;