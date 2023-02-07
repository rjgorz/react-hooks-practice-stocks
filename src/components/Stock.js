import React from "react";

function Stock({ stock, ticker, name, price, handleStock }) {

  return (
    <div>
      <div className="card" onClick={() => handleStock(stock)}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
