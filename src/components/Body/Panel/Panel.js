import { useState} from 'react';
import style from './Panel.module.css';
import { BestCryptoToday, WrostCryptoToday } from '../../../utils/sortCrypto';

const Panel = (props) => {
    const [panelFlag = false, setPanelFlag] = useState();
    const [sort='RANK', setSort] = useState();
    
    const showPanel = () => {
       setPanelFlag(!panelFlag);
    };

    return ( 
        <div className={panelFlag ? `${style.panelShow}` : `${style.panelHide}`} >
            <div className={`${style.option}`}>
                <div className={`${style.currency}`}>
                    <h2 className={`${style.currencyTitle}`}>Shown: <strong>{props.crypto.length}</strong></h2>
                    <button onClick={() => {props.show('8', props.currency); setSort('RANK')}}><i>8</i></button>
                    <button onClick={() => {props.show('0', props.currency); setSort('RANK')}}><i>100</i></button>
                </div>

                <div className={`${style.currency}`}>
                    <h2 className={`${style.currencyTitle}`}>Currency : <strong>{props.currency}</strong></h2>
                    <button onClick={() => {props.show(props.limit,'USD'); setSort('RANK')}}><i className="fas fa-dollar-sign"></i></button>
                    <button onClick={() => {props.show(props.limit,'EUR'); setSort('RANK')}}><i className="fas fa-euro-sign"></i></button>
                    <button onClick={() => {props.show(props.limit,'PLN'); setSort('RANK')}}>PLN</button>
                </div>

                <div className={`${style.currency}`}>
                    <h2 className={`${style.currencyTitle}`}>Sort : <strong>{sort}</strong></h2>
                    <button onClick={() => {props.onChange(BestCryptoToday(props.crypto)); setSort(<i className="fas fa-caret-down"></i>)}}>
                        <i className="fas fa-caret-down"></i>
                    </button>
                    <button onClick={() => {props.onChange(WrostCryptoToday(props.crypto)); setSort(<i className="fas fa-caret-up"></i>)}}>
                        <i className="fas fa-caret-up"></i>
                    </button>
                </div>
            </div>

            <div className={`${style.showPanel}`}>
                <button onClick={showPanel}>{
                    panelFlag ? 
                    <i className="fas fa-angle-double-left"></i> 
                    : 
                    <i className="fas fa-angle-double-right"></i>}
                </button>
            </div>
        </div>
     );
};
 
export default Panel;