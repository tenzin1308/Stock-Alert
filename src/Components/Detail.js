import React, { useEffect, useState } from 'react'
import Stock_Detail from './Stock_Detail';
import axios from 'axios';


export const Detail = ({match}) => {
  const [coins, setCoins] = useState([]);

  useEffect(() =>  {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data);
      }).catch(error => console.log(error));
  }, []);

  const fetchCoin = coins.filter(coin => coin.id === match.params.id)
  

    // const [coins, setCoins] = useState([]);

    // useEffect(() => {
    //     fetchItem();
    //     // console.log("match ", match);
    //   }, []);
    

    //   const fetchItem = async () => {
    //     const fetchItem = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    //     const items = await fetchItem.json();
    //     // console.log("items", items);
    //     const coins = items.filter(item => item.id === match.params.id)
    //     // console.log("Before coins", coins);
    //     setCoins(coins.valueOf());
    //     // console.log("After coins", coins);
    //   }
    return (
      <div>
        <h1>Detail</h1>
        {coins.filter(coin => coin.id === match.params.id).map(coin => {
          return(
            // {console.log("DETAIL", coin)}
            <Stock_Detail
                key={coin.id} 
                name={coin.name} 
                image={coin.image}
                symbol={coin.symbol}
                marketcap={coin.market_cap}
                price={coin.current_price}
                priceChange={coin.price_change_percentage_24h}
                volume={coin.total_volume}
                />
              )
        })}
      </div>
    )
}
