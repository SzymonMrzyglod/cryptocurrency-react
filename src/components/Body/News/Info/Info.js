import style from './Info.module.css';

const Info = (props) => {
    console.log(props);
    return (
        <div>
            <div className={`${style.title}`}>
              <img src={props.icon} alt="icon" className={`${style.icon}`}/>
              <h1 className={`${style.cryptoName}`}>{props.description}</h1>
          </div>
            <p>{props.description}</p>

        </div>
    )};
 
export default Info;