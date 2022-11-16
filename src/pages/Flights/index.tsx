import { Box } from "@mui/material";
import React from "react";
import { NavBar } from "../../components";
import FlightHero from "./FlightHero";
import MapScreen from "./MapScreen";

export default function Flight() {
  return (
    <div>
      <NavBar />
      <FlightHero />
      <MapScreen />
    </div>
  );
}
