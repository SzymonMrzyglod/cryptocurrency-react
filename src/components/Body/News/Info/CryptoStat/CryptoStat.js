import style from './CryptoStat.module.css';

const CryptoStat = (props) => {

    const changePriceStyle = () => props.coinPercent >= 0 ? style.increase : style.decrease; 
    return ( 
        <div className={`${style.stats}`}>
        <p className={`${style.coin}`}>{props.coinTitleKeyWords}</p>
        <p className={`${changePriceStyle()}`}>
            {props.coinPercent  >= 0 ? 
            <i class="fas fa-caret-up"></i> 
            : 
            <i class="fas fa-caret-down"></i>}
            {props.coinPercent}%</p>
        </div>
     );
}
 
export default CryptoStat;