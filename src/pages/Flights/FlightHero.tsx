import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useStyles from "./styles";

import flightImg from "../../assets/flights_3.svg";

export default function FlightHero() {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <img src={flightImg} alt="flightImg" />
      <Box className={classes.content}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontSize: "40px",
            color: "rgb(32,33,36)",
            letterSpacing: "normal",
          }}
        >
          Flight
        </Typography>
        <div className="flightheader">
            
        </div>
      </Box>
    </Box>
  );
}
