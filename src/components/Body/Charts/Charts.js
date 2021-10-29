import {useEffect, useState} from 'react';
import Chart from './Chart/Chart';



const Charts = (props) => {
    const [chartsData, setChartsData] = useState({});
    const fetchHistory = async (coin) => {
      try{
        const res = await fetch(`https://api.coinstats.app/public/v1/charts?period=1m&coinId=${coin}`);
      if(!res.ok){
        throw new Error(`Http error: ${res.ststus}`);
      }
      const json = await res.json();
      setChartsData(json.chart)
    }catch(error){
      console.log(error);
    }
  };
    
    useEffect(() => {
      fetchHistory(props.coin)
    }, []);

    return ( 
        <div>
            <Chart history={chartsData} changePrice={props.changePrice}/>
      </div>

     );
}
 
export default Charts;