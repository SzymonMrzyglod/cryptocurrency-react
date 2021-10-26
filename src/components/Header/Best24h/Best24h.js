import style from './Best24h.module.css';

const Best24h = (props) => {
    return ( 
             <div className={`${style.coin}`}>
                <h1>{props.name}</h1>
                <p>{props.priceChange1d}%</p>
            </div>
     );
};
 
export default Best24h;