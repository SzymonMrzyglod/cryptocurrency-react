import { useEffect, useState } from 'react';
import Cryptos from './components/Body/Cryptos/Cryptos';
import Nav from './components/Body/Nav/Nav'
import './App.css';

const App = () => {

  const [crypto, setCrypto] = useState([]);
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  const fetchCryptos = async () => {
      try{
      const res = await fetch('https://api.coinstats.app/public/v1/coins?skip=0&currency=EUR', requestOptions);
      if(!res.ok){
        throw new Error(`Http error: ${res.ststus}`);
      }
      const json = await res.json();
      console.log(json.coins);
      setCrypto(json.coins); 
    }catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCryptos();
  }, []);

  return (
    <div className="app">
      <div className='body'>
        <Nav/>
        <Cryptos crypto={crypto}/>
      </div>
      <div><h1>FOOTER</h1></div>
    </div>
  );
}

export default App;
