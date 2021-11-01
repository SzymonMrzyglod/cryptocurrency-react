import { useState } from 'react';
import style from './Panel.module.css';
import { BestCryptoToday, WrostCryptoToday } from '../../../auxFunctions/sortCrypto';

const Panel = (props) => {
    const [panelFlag = false, setPanelFlag] = useState();
    const showPanel = () => {
       setPanelFlag(!panelFlag);
    };
    return ( 
        <div className={panelFlag ? `${style.panelShow}` : `${style.panelHide}`} >
            <div className={`${style.option}`}>
                <div className={`${style.currency}`}>
                    <h2 className={`${style.currencyTitle}`}>Currency:</h2>
                    <button onClick={() => props.show(props.limit,'USD')}><i class="fas fa-dollar-sign"></i></button>
                    <button onClick={() => props.show(props.limit,'EUR')}><i class="fas fa-euro-sign"></i></button>
                    <button onClick={() => props.show(props.limit,'PLN')}>PLN</button>
                </div>
                <button onClick={props.flag ? () => props.show('0', props.currency) : () => props.show('8', props.currency)}>{props.flag ? 'Show 100' : 'Show 8'}</button>
                <button 
                onClick={() => props.onChange(BestCryptoToday(props.crypto))}
                >Best Today</button>
                <button 
                onClick={() => props.onChange(WrostCryptoToday(props.crypto))}
                >Wrost Today</button>
            </div>
            <div className={`${style.showPanel}`}>
                <button onClick={showPanel}>{panelFlag ? <i class="fas fa-angle-double-left"></i> : <i class="fas fa-angle-double-right"></i>}</button>
            </div>
        </div>
     );
};
 
export default Panel;