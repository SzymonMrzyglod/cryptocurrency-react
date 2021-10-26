import style from './Crypto.module.css';

const Crypto = (props) => {
  const changePrice = () => props.priceChange1d >= 0 ? style.increase : style.decrease; 
    return (
        <div className={`${style.crypto} ${changePrice()}`}>
          <div className={`${style.cryptoHeader}`}>
              <img src={props.icon} alt="icon" className={`${style.cryptoLogo}`}/>
              <h1 className={`${style.cryptoName}`}>{props.name}</h1>
          </div>
          <p><strong>Current price:</strong> {props.price.toFixed(2)}$</p>
          <p><strong>Market cap:</strong> {props.marketCap.toFixed(2)}$</p>
          <p><strong>Price change 24h:</strong> {props.priceChange1d}%</p>
        </div>
        )};
 
export default Crypto;