import { useState} from 'react';
import style from './Panel.module.css';

const Panel = (props) => {
    const [panelFlag = false, setPanelFlag] = useState();
    
    const showPanel = () => {
       setPanelFlag(!panelFlag);
    };

    return ( 
        <div className={panelFlag ? `${style.panelShow}` : `${style.panelHide}`} >
            <div className={`${style.option}`}>
                <div className={`${style.currency}`}>
                    <h2 className={`${style.currencyTitle}`}>Shown: <strong>{props.crypto.length}</strong></h2>
                    <button onClick={() => {props.show('8', props.currency)}}><i>8</i></button>
                    <button onClick={() => {props.show('0', props.currency)}}><i>ALL</i></button>
                </div>

                <div className={`${style.currency}`}>
                    <h2 className={`${style.currencyTitle}`}>Currency : <strong>{props.currency}</strong></h2>
                    <button onClick={() => {props.show(props.limit,'USD')}}><i className="fas fa-dollar-sign"></i></button>
                    <button onClick={() => {props.show(props.limit,'EUR')}}><i className="fas fa-euro-sign"></i></button>
                    <button onClick={() => {props.show(props.limit,'PLN')}}><i>PLN</i></button>
                </div>

                <div className={`${style.currency}`}>
                    <h2 className={`${style.currencyTitle}`}>Sort : <strong>{props.sortOption}</strong></h2>
                    <button onClick={() => {props.onChange('RANK'); props.sort('RANK')}}>
                        <i>RANK</i>
                    </button>
                    <button onClick={() => {props.onChange('BEST'); props.sort('BEST')}}>
                        <i className="fas fa-caret-down"></i>
                    </button>
                    <button onClick={() => {props.onChange('WROST'); props.sort('WROST')}}>
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