import style from './News.module.css';
import Info from './Info/Info';

const News = (props) => {
    return ( 
        <div className={`${style.news}`}>
          {props.news.map(item => (
            <Info 
              key = {item.id} {...item}
            />
            ))};
        </div>
     );
}
 
export default News;