import style from './changePriceStyle.module.css'

const ChangePriceStyle = (priceChange) => priceChange >= 0 ? `${style.increase}` : `${style.decrease}`;
 
const PriceArrow = (priceChange) => priceChange >= 0 ? <i class="fas fa-caret-up"></i> : <i class="fas fa-caret-down"></i>;

export {ChangePriceStyle, PriceArrow};