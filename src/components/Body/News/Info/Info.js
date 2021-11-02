import style from './Info.module.css';
import CryptoStat from './CryptoStat/CryptoStat';
import { v4 as uuid } from 'uuid';

const Info = (props) => {

    const statCoins = () => {
        return props.coins.map( coin => (
        <CryptoStat 
            key={uuid()} {...coin}
        />
     ))}; 

    return (
        <div className={`${style.news}`}>
            <div className={`${style.header}`}>
              <img src={props.imgURL} alt="icon" className={`${style.image}`}/>
              <div className={`${style.description}`}>
              <p className={`${style.date}`}>{new Date(props.feedDate).toUTCString()}</p>
                 <h1 className={`${style.title}`}>{props.title}</h1> 
                 <p className={`${style.content}`}>{statCoins()}</p>
                {props.description !== '[#item_full_content]' 
                && 
                <p className={`${style.descriptionNews}`}>{props.description}</p>}
                <div className={`${style.footer}`}>
                    <a className={`${style.link}`} href={props.shareURL} to="route" target="_blank" rel="noopener noreferrer">More... </a>
                 <p className={`${style.source}`}>Source: {props.source}</p>
                </div>
              </div>
          </div>
        </div>
    )};
 
export default Info;