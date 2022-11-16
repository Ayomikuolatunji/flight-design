import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import PersonIcon from "@mui/icons-material/Person";
import useStyles from "./styles";
import { DrodownWithIcon } from "../../components";
import flightImg from "../../assets/flights_3.svg";

export default function FlightHero() {
  const Tripsoptions = ["Round Trip", "One way", "Multi-city"];
  const economyOptions = ["Round Trip", "One way", "Multi-city"];
  const classes = useStyles();
  return (
    <Box className="sm:rounded-none rounded-b-[25px] rou h-[auto] pb-5 border-b-[2px] sm:border-none border-gray-400 relative block z-50">
      <Box className="sm:w-[90%] mx-auto">
        <img src={flightImg} alt="flightImg" />
      </Box>
      <Box className={classes.nameTitle}>
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
          Flights
        </Typography>
      </Box>
      <Box className="sm:w-[50%]  mx-auto sm:border-[1px] border-gray-100 flex sm:rounded-[10px] md:mt-5 sm:shadow-xl">
        <Box className="flex items-center mt-2">
          <li className="flex justify-start items-center">
            <DrodownWithIcon
              options={Tripsoptions}
              Icon={SwapHorizIcon}
              name="Round Trip"
            />
          </li>
          <li className="flex justify-start items-center">
            <DrodownWithIcon
              options={economyOptions}
              Icon={PersonIcon}
              name={1}
            />
          </li>
          <li className="flex justify-start items-center">
            <DrodownWithIcon options={economyOptions} name="Economy" />
          </li>
        </Box>
      </Box>
    </Box>
  );
}
