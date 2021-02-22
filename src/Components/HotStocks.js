import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react';
import Coin from './Stock';
import { Link } from 'react-router-dom';

export const HotStocks = () => {

    const [coins, setCoins] = useState([]);
  
    useEffect(() => {
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data);
      }).catch(error => console.log(error));
    }, []);
  
    
  
    const filteredCoins = coins.sort((a, b) => a.price_change_percentage_24h < b.price_change_percentage_24h).slice(0,10)
  
    return (
      <div className="stock-app">
        <div className="stock-search">
          <h1 className="stock-text">Top 10 Movers</h1>
        </div>
        {filteredCoins.map(coin => {
          return (
            <Link key={coin.id} to={`/home/${coin.id}`} className="link">
              <Coin 
              key={coin.id} 
              name={coin.name} 
              image={coin.image}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume}/>
            </Link>
          )
        })}
      </div>
    );
  }
