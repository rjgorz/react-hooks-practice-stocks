import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [filter, setFilter] = useState("All");
  const [nameSort, setNameSort] = useState(false);
  const [priceSort, setPriceSort] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(r => r.json())
    .then(stocks => setStocks(stocks))
  }, []);

  function handlePurchase(newStock) {
    setPortfolio([...portfolio, newStock]);
  }
  function handleDelete(delStock) {
    const updatedPortfolio = portfolio.filter(stock => stock.id !== delStock.id)
    setPortfolio(updatedPortfolio);
  }
  function handleFilter(e) {
    setFilter(e.target.value);
  }
  function handleNameSort() {
    setNameSort(true);
    setPriceSort(false);
  }
  function handlePriceSort() {
    setPriceSort(true);
    setNameSort(false);
  }
  function bubbleSort(arr, value) {
    for(let i = 0; i < arr.length; i++) {
      for(let j = 0; j < (arr.length - i - 1); j++) {
        if(arr[j][value] > arr[j+1][value]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j+1] = temp;
        }
      }
    }
    return arr;
  }

  let filteredStocks = stocks.filter(stock => {
    if(filter === "All") return true;
    return stock.type === filter;
  });

  if(nameSort)
    filteredStocks = bubbleSort(filteredStocks, "name");
	else if(priceSort) 
    filteredStocks = bubbleSort(filteredStocks, "price");

  return (
    <div>
      <SearchBar handleFilter={handleFilter} handleNameSort={handleNameSort}
        handlePriceSort={handlePriceSort} nameSort={nameSort} priceSort={priceSort} 
      />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} handleStock={handlePurchase} />
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={portfolio} handleStock={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
