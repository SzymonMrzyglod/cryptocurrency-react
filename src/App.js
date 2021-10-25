import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Cryptos from './components/Body/Cryptos/Cryptos';
import Nav from './components/Body/Nav/Nav'
import './App.css';
import News from './components/Body/News/News';

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
      url === urlCrypto ? 
      setCrypto(json.coins)
      :
      setNews(json.news)
      ; 
    }catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCryptos(urlCrypto);
    fetchCryptos(urlNews);
  }, []);

  return (
    <Router>
      <div className="app">
        
        <div className='body'>
          <Nav/>
          <Route exact={true} path='/'>
            <News news={news}/>
          </Route>
          <Route path='/crypto'>
            <Cryptos crypto={crypto}/>
          </Route>
        </div>
        <div><h1>FOOTER</h1></div>
      </div>
    </Router>
  );
}

export default App;
