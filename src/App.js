import { useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Cryptos from './components/Body/Cryptos/Cryptos';
import './App.css';
import News from './components/Body/News/News';
import Header from './components/Header/Header';
import Charts from './components/Body/Charts/Charts';
import Panel from './components/Body/Panel/Panel';
import Footer from './components/Footer/Footer';

const cryptoCoppy = [];

const App = () => {

  const [crypto, setCrypto] = useState([]);
  const [news, setNews] = useState([]);
  const [btnFlag = true, setBtnFlag] = useState();
  const [helper = true, setHelper] = useState();

  const fetchCryptos = async (limit) => {
      try{
      const res = await fetch(`https://api.coinstats.app/public/v1/coins?skip=0&limit=${limit}&currency=USD`);
      if(!res.ok){
        throw new Error(`Http error: ${res.ststus}`);
      }
      const json = await res.json();
        setCrypto(json.coins)
        cryptoCoppy.length = 0;
        cryptoCoppy.push(...json.coins)
    }catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCryptos('8');
  }, []);

  const changeCrypto = sort => {
    setCrypto(sort);
    setHelper(!helper); 
  }

  const searchCrypto = name => {
    const cryptoName = [...cryptoCoppy]
      .filter(coin => coin.id.toLowerCase().includes(name.toLowerCase()));
    setCrypto(cryptoName)
  }

  const showCrypto = (limit) => {
    setBtnFlag(!btnFlag); 
    fetchCryptos(limit);
  }

  return (
    <Router>
      <div className="app">
        <Header onSearch={(name) => searchCrypto(name)} crypto={[...crypto]}/>
        <div className='body'>    
            <Switch>
              <Route exact={true} path='/news'><News news={news}/></Route>
              <Route path='/'><Cryptos crypto={crypto}/></Route>
            </Switch>
            <Panel onChange={(sort) => changeCrypto(sort)}flag={btnFlag} show={showCrypto} crypto={crypto}/>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

  // const urlAll = 'https://api.coinstats.app/public/v1/coins?skip=0&currency=USD';
  // const urlCrypto = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=8&currency=USD';
  // const urlNews = 'https://api.coinstats.app/public/v1/news/handpicked?skip=0&limit=20';

// const fetchCryptos = async (url) => {
//   try{
//   const res = await fetch(url);
//   if(!res.ok){
//     throw new Error(`Http error: ${res.ststus}`);
//   }
//   const json = await res.json();
//   if(url === urlCrypto){
//     setCrypto(json.coins)
//     cryptoCoppy.push(...json.coins)
//   } else {
//     setNews(json.news)
//   }; 
// }catch(error){
//   console.log(error);
// }
// };

// useEffect(() => {
// fetchCryptos(urlCrypto);
// fetchCryptos(urlNews);
// }, []);