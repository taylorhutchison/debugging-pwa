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
        console.log(jsonResponse);
        setAboutData(jsonResponse.body);
      })
      .catch((err) => console.log(err));
  };

  console.log(aboutData);

  return (
    <>
      <Grid container justify="center" style={{ backgroundColor: "#d2c6b2" }}>
        <Grid item xs={10} style={{ paddingTop: "2em", paddingBottom: "2em" }}>
          <Typography variant="h4">{aboutData.tagLine}</Typography>
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
