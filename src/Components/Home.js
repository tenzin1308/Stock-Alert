import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react';
import Stock from './Stock';
import { Link } from 'react-router-dom';


export const Home = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
  
    useEffect(() => {
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data);
      }).catch(error => console.log(error));
    }, []);
  
    const handelChange = e =>{
      setSearch(e.target.value);
    };
  
    const filteredCoins = coins.filter(coin => 
      coin.name.toLowerCase().includes(search.toLowerCase())
    )
  
    return (
      <div className="stock-app">
        <div className="stock-search">
          <h1 className="stock-text">Search a currency <img className="search-button" /></h1>
          <form>
            <input type="text" placeholder="Search" className="stock-input" onChange={handelChange} />
            
          </form>
        </div>
        {filteredCoins.map(coin => {
          // {console.log("HOme coins", coin);}
          return (
            <Link key={coin.id} to={`/home/${coin.id}`} className="link">
              <Stock 
                key={coin.id} 
                name={coin.name} 
                image={coin.image}
                symbol={coin.symbol}
                marketcap={coin.market_cap}
                price={coin.current_price}
                priceChange={coin.price_change_percentage_24h}
                volume={coin.total_volume}
                />
              </Link>
          )
        })}
      </div>
    );
  }
