import React, { useState, useEffect } from "react";
import "./App.css";
import { Typography, Grid, Button } from "@material-ui/core";
import StockImage from "./stocks.svg";
import { mockStockPrices } from "./data";

export const Stocks = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    getStockPriceData();
  }, []);

  const onClickRefresh = () => {
    getStockPriceData();
  };

  const getStockPriceData = () => {
    if (window.location.hostname === "localhost")
      return setStockData(mockStockPrices);

    fetch("/api")
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
                company={data.company}
                ticker={data.ticker}
                stockPrice={data.stockPrice}
                website={data.website}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

const RefreshStocks = ({ onClick }) => {
  return (
    <Grid
      container
      justify="space-around"
      className="refresh-container"
      alignItems="center"
    >
      <img src={StockImage} alt="stock" className="stock-image" />
      <div>
        <Button onClick={onClick} variant="contained" color="primary">
          REFRESH
        </Button>
      </div>
    </Grid>
  );
};

const Stock = ({ company, ticker, stockPrice, website }) => {
  if (!company) return <div />;
  return (
    <Grid container className="stock" alignItems="center">
      <Grid item xs={6} sm={4}>
        <Typography variant="subtitle1" align="center">
          {company}
        </Typography>
      </Grid>
      <Grid item xs={6} sm={2}>
        <Typography variant="subtitle2" align="center">
          {ticker}
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Typography variant="subtitle2" align="center">
          {stockPrice}
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Typography variant="body2" color="textSecondary" align="center">
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="visit-site"
          >
            website
          </a>
        </Typography>
      </Grid>
    </Grid>
  );
};
