import React, { useState, useEffect } from "react";
import "./App.css";
import { Typography, Grid, Button } from "@material-ui/core";
import StockImage from "./stocks.svg";
import { mockStockPrices } from "./data";
import { openDatabase, fetchAndSaveToDB, getDataFromDB } from "./db";
let db;

export const Stocks = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    if (!navigator.onLine) refreshData();
    else getStockPriceData();
  }, []);

  useEffect(() => {
    navigator.serviceWorker.addEventListener("message", (event) => {
      if (event.data.type === "CREATE_DB") {
        openDatabase().then((dbPromise) => {
          db = dbPromise;
          fetchAndSaveToDB(db);
        });
      }
    });
  }, []);

  /**
   * Get data from indexedDB -> fetch from network in the background and update UI
   * If connection to db is lost due to browser refresh it re-opens database and get data.
   */
  const refreshData = async () => {
    if (!db) db = await openDatabase();
    getDataFromDB(db)
      .then(({ dbResults, newResultsPromise }) => {
        setStockData(dbResults || []);
        return newResultsPromise;
      })
      .then((updatedResults) => {
        if (updatedResults.length > 0) setStockData(updatedResults);
      })
      .catch((err) => console.log(err));
  };

  /**
   * Get stock price data from network.
   * This function will execute when browser is refreshed (online and offline) and when app loads
   */
  const getStockPriceData = () => {
    if (window.location.hostname === "localhost")
      return setStockData(mockStockPrices);

    fetch("/.netlify/functions/stocks")
      .then((response) => { console.log(response); return response.json(); })
      .then((jsonData) => setStockData(jsonData))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <RefreshStocks onClick={refreshData} />
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
        <Button onClick={onClick} variant="outlined" color="primary">
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
