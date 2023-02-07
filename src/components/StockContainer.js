import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handleStock }) {
  
  const stockList = stocks.map(stock => {
    return (
      <Stock key={stock.id} stock={stock} ticker={stock.ticker}
        name={stock.name} price={stock.price}
        handleStock={handleStock}
      />
    );
  });

  return (
    <div>
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}

export default StockContainer;
