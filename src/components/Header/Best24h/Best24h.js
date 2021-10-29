import style from './Best24h.module.css';

const Best24h = (props) => {
    return ( 
             <div className={`${style.coin}`}>
                <img src={props.icon} alt="icon" className={`${style.icon}`}/>
                <h1 className={`${style.symbol}`}>{props.symbol}</h1>
                <p className={`${style.changeDay}`}>{props.priceChange1d}%</p>
            </div>
     );
};
 
export default Best24h;