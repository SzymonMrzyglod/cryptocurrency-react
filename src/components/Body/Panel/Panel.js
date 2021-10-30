import { useState } from 'react';
import style from './Panel.module.css';

const Panel = (props) => {
    const [panelFlag = false, setPanelFlag] = useState();
    const showPanel = () => {
       setPanelFlag(!panelFlag);
    };

    const bestCryptoToday = () =>{
       const bestCrypto = props.crypto.sort((prev, curr)=>curr.priceChange1d - prev.priceChange1d);
       return props.onChange(bestCrypto)
    } 
    const wrostCryptoToday = () =>{
        const bestCrypto = props.crypto.sort((prev, curr)=>prev.priceChange1d - curr.priceChange1d);
        return props.onChange(bestCrypto)
     } 

    return ( 
        <div className={panelFlag ? `${style.panelShow}` : `${style.panelHide}`} >
            <div className={`${style.option}`}>
                <button onClick={props.flag ? () => props.show('0') : () => props.show('8')}>{props.flag ? 'Show 100' : 'Show 8'}</button>
                <button onClick={bestCryptoToday}>Best Today</button>
                <button onClick={wrostCryptoToday}>Wrost Today</button>
            </div>
            <div className={`${style.showPanel}`}>
                <button onClick={showPanel}>{panelFlag ? <i class="fas fa-angle-double-left"></i> : <i class="fas fa-angle-double-right"></i>}</button>
            </div>
        </div>
     );
};
 
export default Panel;