import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { aboutData } from "./data";

export const About = () => {
  return (
    <>
      <Grid container justify="center" className="tagline-container">
        <Grid item xs={10}>
          <Typography variant="h4">{aboutData.tagLine}</Typography>
        </Grid>
      </Grid>

      <Grid
        container
        direction="column"
        alignItems="center"
        className="features-container"
      >
        <Grid item>
          <Typography variant="h4">FEATURES</Typography>
        </Grid>
        <Grid item>
          <ul>
            {aboutData.features.map((feature, key) => {
              return (
                <li key={key}>
                  <Typography variant="h6">{feature}</Typography>
                </li>
              );
            })}
          </ul>
        </Grid>
      </Grid>
    </>
  );
};
