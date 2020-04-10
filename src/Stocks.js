import React, { useState, useEffect } from "react";
import "./App.css";
import { Typography, Grid, Button } from "@material-ui/core";
import StockImage from "./stocks.svg";

export const Stocks = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    getStockPriceData();
  }, []);

  useEffect(() => {
    navigator.serviceWorker.addEventListener("message", (event) => {
      setStockData(event.data.res);
    });
  }, []);

  const onClickRefresh = () => {
    getStockPriceData();
  };

  const getStockPriceData = () => {
    fetch("https://zeit-stock-price-api.now.sh/api")
      .then((response) => response.json())
      .then((jsonData) => setStockData(jsonData.body))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <RefreshStocks onClick={onClickRefresh} />
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

const RefreshStocks = ({ onClick }) => {
  return (
    <Grid
      container
      justify="center"
      className="refresh-container"
      alignItems="center"
    >
      <Grid item xs={2}>
        <img src={StockImage} alt="stock" className="stock-image" />
      </Grid>
      <Grid item xs={4}></Grid>
      <div>
        <Button onClick={onClick} variant="contained" color="primary">
          REFRESH
        </Button>
      </div>
    </Grid>
  );
};

const Stock = ({ company, ticker, stockPrice, timeElapsed }) => {
  if (!company) return <div />;
  return (
    <Grid container className="stock" alignItems="center">
      <Grid item xs={6} sm={4}>
        <Typography variant="subtitle1">{company}</Typography>
      </Grid>
      <Grid item xs={6} sm={2}>
        <Typography variant="subtitle2">{ticker}</Typography>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Typography variant="subtitle2">{stockPrice}</Typography>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Typography variant="body2" color="textSecondary">
          {timeElapsed}
        </Typography>
      </Grid>
    </Grid>
  );
};
