import React from 'react'
import './Stock.css';

const Stock = ({image, name, symbol, price, volume, priceChange, marketcap }) => {
    return (
            <div className="stock-container">
                
                    <div className="stock-row">
                        <div className="stock">
                            <img src={image} alt='crypto'/>
                            <h1>{name}</h1>
                            <p className="stock-symbol">{symbol}</p>
                        </div>
                        <div className="stock-data">
                            <p className="stock-price">${price}</p>
                            <p className="stock-volume">${volume.toLocaleString()}</p>
                            {priceChange < 0 ? (
                                <p className="stock-percent-red">{parseFloat(priceChange).toFixed(2)}%</p>
                            ) : (
                                <p className="stock-percent-green">{parseFloat(priceChange).toFixed(2)}%</p>
                            )}
                            <p className="stock-marketcap">
                                Mkt Cap: ${marketcap.toLocaleString()}
                            </p>
                        </div>
                    </div>
                
            </div>
    )
}

export default Stock