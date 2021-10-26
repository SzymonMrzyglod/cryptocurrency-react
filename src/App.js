import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Cryptos from './components/Body/Cryptos/Cryptos';
import Nav from './components/Body/Nav/Nav'
import './App.css';
import News from './components/Body/News/News';
import Header from './components/Header/Header';

const cryptoCoppy = [];

const App = () => {
  const urlCrypto = 'https://api.coinstats.app/public/v1/coins?skip=0&currency=USD';
  const urlNews = 'https://api.coinstats.app/public/v1/news/handpicked?skip=0&limit=20'

  const [crypto, setCrypto] = useState([]);
  const [news, setNews] = useState([]);

  const fetchCryptos = async (url) => {
      try{
      const res = await fetch(url);
      if(!res.ok){
        throw new Error(`Http error: ${res.ststus}`);
      }
      const json = await res.json();
      if(url === urlCrypto){
        setCrypto(json.coins)
        cryptoCoppy.push(...json.coins)
      } else {
        setNews(json.news)
      }; 
    }catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCryptos(urlCrypto);
    fetchCryptos(urlNews);
  }, []);

  const searchCrypto = name => {
    const cryptoName = [...cryptoCoppy]
      .filter(coin => coin.id.toLowerCase().includes(name.toLowerCase()));
    setCrypto(cryptoName)
  }

  return (
    <Router>
      <div className="app">
        <Header onSearch={(name) => searchCrypto(name)} crypto={[...crypto]}/>
        <div className='body'>
          <Nav/>     
            <Switch>
              <Route exact={true} path='/news'><News news={news}/></Route>
              <Route path='/'><Cryptos crypto={crypto}/></Route>
            </Switch>
        </div>
        <div><h1>FOOTER</h1></div>
      </div>
    </Router>
  );
}

export default App;
