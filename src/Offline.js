import React from "react";
import { Grid, Typography } from "@material-ui/core";

export const Offline = () => {
  return (
    <Grid container alignItems="center" justify="center" className="offline">
      <Grid item>
        <Typography variant="subtitle2">{"OFFLINE"}</Typography>
      </Grid>
    </Grid>
  );
};
