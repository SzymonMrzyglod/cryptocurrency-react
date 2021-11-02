import { useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Cryptos from './components/Body/Cryptos/Cryptos';
import './App.css';
import News from './components/Body/News/News';
import Header from './components/Header/Header';
import Panel from './components/Body/Panel/Panel';
import Footer from './components/Footer/Footer';

const cryptoCoppy = [];

const App = () => {

  const [crypto, setCrypto] = useState([]);
  const [news, setNews] = useState([]);
  const [btnFlag = true, setBtnFlag] = useState();
  const [helper = true, setHelper] = useState();
  const [limit='8', setLimit] = useState();
  const [currency='USD', setCurrency] = useState();

  const fetchCryptos = async (limit, currency) => {
    try{
      const res = await fetch(`https://api.coinstats.app/public/v1/coins?skip=0&limit=${limit}&currency=${currency}`);
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

  const fetchNews = async () => {
    try{
      const res = await fetch(`https://api.coinstats.app/public/v1/news/handpicked?skip=0&limit=20`);
      if(!res.ok){
        throw new Error(`Http error: ${res.ststus}`);
      }
      const json = await res.json();
      setNews(json.news)
    }catch(error){
      console.log(error);
    }
  };

  const changeCrypto = sort => {
    setCrypto(sort);
    setHelper(!helper); 
  }

  const searchCrypto = name => {
    const cryptoName = [...cryptoCoppy]
      .filter(coin => coin.id.toLowerCase().includes(name.toLowerCase()));
    setCrypto(cryptoName)
  }

  const showCrypto = (limitProp, currencyProp) => {
    limitProp !== limit && setBtnFlag(!btnFlag);
    setCurrency(currencyProp)
    setLimit(limitProp);
    fetchCryptos(limitProp, currencyProp);
  }

  useEffect(() => {
    fetchCryptos(limit, currency);
    fetchNews();
  }, []);

  return (
    <Router>
      <div className="app">
        <Header onSearch={(name) => searchCrypto(name)} crypto={[...crypto]}/>
        <div className='body'>   

            <Switch>
              <Route exact={true} path='/news'>
                <News news={news}/>
              </Route>
              
              <Route path='/'>
                <Cryptos crypto={crypto} currency={currency}/>
                <Panel 
                  onChange={(sort) => changeCrypto(sort)} 
                  limit={limit} 
                  currency={currency} 
                  flag={btnFlag} 
                  show={showCrypto} 
                  crypto={crypto}/>
              </Route>
            </Switch>

        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
