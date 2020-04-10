import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";

export const About = () => {
  const [aboutData, setAboutData] = useState({ tagLine: "", features: [] });

  useEffect(() => {
    getAboutData();
  }, []);

  const getAboutData = () => {
    fetch("https://zeit-stock-price-api.now.sh/api/about")
      .then((response) => response.json())
      .then((jsonResponse) => {
        setAboutData(jsonResponse.body);
      })
      .catch((err) => console.log(err.message));
  };

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
            {aboutData.features.map((feature) => {
              return (
                <li>
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
