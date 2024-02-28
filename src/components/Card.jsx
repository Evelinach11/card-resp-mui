import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: 1200,
    margin: "0 auto",
  },
  card: {
    padding: 20,
    maxWidth: "100%",
    margin: 20,
  },
  cardImg: {
    width: "100%",
    height: 200,
    objectFit: "cover",
  },
  cardBody: {
    padding: 20,
  },
}));

const Card = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container spacing={3}>
        {[...Array(5).keys()].map((index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3} className={classes.card}>
              <img
                className={classes.cardImg}
                src="/img/san-francisco.jpeg"
                alt="San Francisco"
              />
              <div className={classes.cardBody}>
                <Typography variant="h5" component="h2" gutterBottom>
                  San Francisco
                </Typography>
                <Typography variant="body1">
                  San Francisco, which is Spanish for "Saint Francis", takes its
                  name from Mission San Francisco de Asís, which in turn was
                  named after Saint Francis of Assisi.
                </Typography>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Card;
