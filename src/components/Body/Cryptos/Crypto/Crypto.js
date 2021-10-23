const Crypto = (props) => {
    return (
        <div>
          <p>{props.id}</p>
            <img src={props.icon} alt="icon"/>
          <p>{props.name}</p>
          <p>{props.price}</p>
          <p>{props.marketCap}</p>
          <p>{props.priceChange1d}%</p>
        </div>
        )};
 
export default Crypto;