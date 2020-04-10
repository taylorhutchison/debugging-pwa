import React from "react";
import { Grid, Typography } from "@material-ui/core";

export const About = () => {
  return (
    <>
      <Grid container justify="center" style={{ backgroundColor: "#d2c6b2" }}>
        <Grid item xs={10} style={{ paddingTop: "2em", paddingBottom: "2em" }}>
          <Typography variant="h4">
            We are tenaciously reimagining future of the world — one that is
            built on ingenious technology, fueled by market-moving insights and
            primarily driven by forward thinking.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        direction="column"
        alignItems="center"
        style={{ backgroundColor: "#f2ed6f" }}
      >
        <Grid item style={{ paddingTop: "2em", paddingBottom: "1em" }}>
          <Typography variant="h4">FEATURES</Typography>
        </Grid>

        <Grid item>
          <ul>
            <li>
              <Typography variant="h6">It is a PWA</Typography>
            </li>
            <li>
              <Typography variant="h6">It is fast</Typography>
            </li>
            <li>
              <Typography variant="h6">It is offline-first</Typography>
            </li>
            <li>
              <Typography variant="h6">It is small in size</Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
    </>
  );
};
