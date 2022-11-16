import { Box, Grid } from "@mui/material";
import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import destinationImg from "../../assets/destination.jpeg";
import staticMap from "../../assets/staticmap.png";

export default function MapScreen() {
  const data = [
    {
      title: "Toronto",
      date: "Dec 1-7",
      time: "30min",
      price: "CA$261",
    },
    {
      title: "Toronto",
      date: "Dec 1-7",
      time: "30min",
      price: "CA$261",
    },
    {
      title: "Toronto",
      date: "Dec 1-7",
      time: "30min",
      price: "CA$261",
    },
    {
      title: "Toronto",
      date: "Dec 1-7",
      time: "30min",
      price: "CA$261",
    },
  ];

  return (
    <Box className="w-[90%] sm:w-[50%] mx-auto mt-4">
      <Box className="w-full">
        <h1 className="title font-[500] tracking-normal text-[rgb(32,33,36)] text-[20px] pb-[16px]">
          Trip from Nanaimo
        </h1>
        <div className="flex items-center justify-between w-full">
          <div className="leading-[24px] text-[#70757a] flex space-x-3 items-center">
            <span>Round trip</span>
            <span className="before:-['.']"></span>
            <span className="">1 passenger</span>
            <span className="In8vGd">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                focusable="false"
                className=" NMm5M"
              >
                <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path>
              </svg>
            </span>
          </div>
          <div className="sm:block hidden">
            <h2 className="text-[rgb(66,133,244)] cursor-pointer hover:bg-[rgb(241,243,244)] py-2 px-6 rounded-[70px]">
              Explore destinations
            </h2>
          </div>
        </div>
      </Box>
      <Box className="w-full my-4">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              src={staticMap}
              alt="staticMap"
              className="rounded-3xl   w-full"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            {data.map((item, index) => {
              return (
                <Box className="border-2 rounded-[25px] flex mt-4">
                  <img
                    src={destinationImg}
                    alt={item.title}
                    className="rounded-l-3xl max-w-full"
                  />
                  <div className="p-2">
                    <h1 className="pb-1">{item.title}</h1>
                    <p className="pb-1">{item.date}</p>
                    <p className="text-[#5e6266]">
                      <StarBorderIcon className="border-[1px] border-red-700 text-red-500 rounded-full" />
                      <span className="ml-2">Non stop {item.time}</span>
                    </p>
                  </div>
                </Box>
              );
            })}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
