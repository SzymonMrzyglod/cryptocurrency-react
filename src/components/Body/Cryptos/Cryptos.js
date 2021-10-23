import style from './Cryptos.module.css'
import Crypto from './Crypto/Crypto'
const Cryptos = (props) => {

    return ( 
        <div className={`${style.cryptos}`}>
          {props.crypto.map(item => (
            <Crypto 
              key = {item.id} {...item}
            />
            ))};
      </div>
     );
}
 
export default Cryptos;