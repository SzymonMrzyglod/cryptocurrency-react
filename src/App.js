import { useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Cryptos from './components/Body/Cryptos/Cryptos';
import { BestCryptoToday, WrostCryptoToday, Rank } from './utils/sortCrypto';
import './App.css';
import News from './components/Body/News/News';
import Header from './components/Header/Header';
import Panel from './components/Body/Panel/Panel';
import Footer from './components/Footer/Footer';

const cryptoCopy = [];

const App = () => {

  const [crypto, setCrypto] = useState([]);
  const [news, setNews] = useState([]);
  const [btnFlag = true, setBtnFlag] = useState();
  const [limit='8', setLimit] = useState();
  const [currency='USD', setCurrency] = useState();
  const [sort='RANK', setSort] = useState();

  const fetchCryptos = async (limit, currency) => {
    try{
      const res = await fetch(`https://api.coinstats.app/public/v1/coins?skip=0&limit=${limit}&currency=${currency}`);
      if(!res.ok){
        throw new Error(`Http error: ${res.ststus}`);
      }
      const json = await res.json();
      setCrypto(json.coins)
      cryptoCopy.length = 0;
      cryptoCopy.push(...json.coins)
      checkSort(sort)
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

  const checkSort = (sort) => {
    switch (sort) {
      case 'BEST':
          setCrypto(BestCryptoToday(cryptoCopy));
          break;
      case 'WROST':
         setCrypto(WrostCryptoToday(cryptoCopy));
         break;
      default:
        setCrypto(Rank(cryptoCopy));
    }
  }

  const searchCrypto = name => {
    const cryptoName = [...cryptoCopy]
      .filter(coin => coin.id.toLowerCase().includes(name.toLowerCase()));
    setCrypto(cryptoName)
  }

  const showCrypto = (limitProp, currencyProp) => {
    limitProp !== limit && setBtnFlag(!btnFlag);
    setCurrency(currencyProp)
    setLimit(limitProp);
    fetchCryptos(limitProp, currencyProp);
  }

  const sortCrypto = (sortProp) => {
    setSort(sortProp)
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
                  onChange={(sort) => checkSort(sort)} 
                  limit={limit} 
                  currency={currency} 
                  flag={btnFlag} 
                  show={showCrypto} 
                  crypto={crypto}
                  sort={sortCrypto}
                  sortOption = {sort}/>
                  
              </Route>
            </Switch>

        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
