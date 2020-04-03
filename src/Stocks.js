import React, { useState, useEffect } from "react";
import "./App.css";
import { Typography, Grid, Button } from "@material-ui/core";

export const Stocks = ({ onClick }) => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    fetch("https://zeit-stock-price-api.now.sh/api")
      .then(response => response.json())
      .then(jsonData => setStockData(jsonData.body))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <HomePageHeader />
      <RefreshStocks onClick={onClick} />
      <div className="stock-container">
        {stockData.map((data, key) => {
          return (
            <div key={key}>
              <Stock
                key={key}
                company={data.company}
                ticker={data.ticker}
                stockPrice={data.stockPrice}
                timeElapsed={data.timeElapsed}
              />
            </div>
          );
        })}
      </div>
      <Stock />
    </>
  );
};

const HomePageHeader = () => {
  return (
    <header className="header">
      <Typography variant="h2">Stock Prices</Typography>
    </header>
  );
};

const RefreshStocks = ({ onClick }) => {
  return (
    <div className="refresh-container">
      <Button onClick={onClick} variant="contained" color="primary">
        REFRESH
      </Button>
    </div>
  );
};

const Stock = ({ company, ticker, stockPrice, timeElapsed }) => {
  if (!company) return <div />;
  return (
    <Grid container className="stock" alignItems="center">
      <Grid item xs={5}>
        <Typography variant="subtitle1">{company}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h6">{ticker}</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="subtitle2">{stockPrice}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="body2" color="textSecondary">
          {timeElapsed}
        </Typography>
      </Grid>
    </Grid>
  );
};
