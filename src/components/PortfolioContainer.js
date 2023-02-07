import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks, handleStock }) {

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
      <h2>My Portfolio</h2>
      {stockList}
    </div>
  );
}

export default PortfolioContainer;
