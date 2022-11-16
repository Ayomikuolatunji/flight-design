import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import PersonIcon from "@mui/icons-material/Person";
import { RangeDatePicker } from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";
import "react-google-flight-datepicker/dist/main.css";
import useStyles from "./styles";
import { DrodownWithIcon } from "../../components";
import flightImg from "../../assets/flights_3.svg";
import BookFlightButtons from "./BookFlightButtons";

export default function FlightHero() {
  const Tripsoptions = ["Round Trip", "One way", "Multi-city"];
  const economyOptions = ["Round Trip", "One way", "Multi-city"];
  const [selctedTrip, setSelectedTrip] = useState("");

  const classes = useStyles();

  console.log(selctedTrip);
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
      <Box className="sm:w-[50%]  mx-auto sm:border-[1px] border-gray-100 sm:rounded-[10px] md:mt-5 sm:shadow-xl">
        <Box className="flex items-center mt-2">
          <li className="flex justify-start items-center">
            <DrodownWithIcon
              options={Tripsoptions}
              Icon={SwapHorizIcon}
              name="Round Trip"
              onSelect={setSelectedTrip}
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
        <Box className="book-flights">
          <div className="left">
            <BookFlightButtons />
          </div>
        </Box>
        <Box>
          <RangeDatePicker
            startDate={new Date(2020, 0, 15)}
            endDate={new Date(2020, 1, 1)}
            disabled
          />
        </Box>
      </Box>
    </Box>
  );
}
