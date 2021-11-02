const BestCryptoToday = (cryptos) => cryptos.sort((prev, curr)=>curr.priceChange1d - prev.priceChange1d);

const WrostCryptoToday = (cryptos) => cryptos.sort((prev, curr)=>prev.priceChange1d - curr.priceChange1d);
     
export { BestCryptoToday, WrostCryptoToday } 