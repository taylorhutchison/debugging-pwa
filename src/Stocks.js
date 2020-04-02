import React from "react";
import "./App.css";
import { Typography, Grid } from "@material-ui/core";
import { stockData } from "./data";

export const Stocks = () => {
  return (
    <>
      <header className="header">
        <Typography variant="h2">Stock Prices</Typography>
      </header>
      {stockData.map((data, key) => {
        return (
          <div key={key}>
            <Stock
              company={data.company}
              ticker={data.ticker}
              stockPrice={data.stockPrice}
              timeElapsed={data.timeElapsed}
            ></Stock>
          </div>
        );
      })}
      <Stock />
    </>
  );
};

const Stock = ({ company, ticker, stockPrice, timeElapsed }) => {
  return (
    <Grid container className="stock" align>
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
        <Typography variant="body2">{timeElapsed}</Typography>
      </Grid>
    </Grid>
  );
};
