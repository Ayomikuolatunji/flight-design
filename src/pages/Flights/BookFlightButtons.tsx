import React from "react";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { useAppDispatch } from "../../redux/hooks";
import {
  setChooseCurrenLocation,
  setchooseLocationWhereTo,
} from "../../redux/features/bookFlightSlice";

export default function BookFlightButtons() {
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center">
      <button
        className="flex mx-2 border-2 p-3 items-center w-[180px] relative"
        onClick={() => {
          dispatch(setChooseCurrenLocation("current"));
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          focusable="false"
          className="IILp3 kmKQme LKTCxe NMm5M"
        >
          <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z"></path>
        </svg>
        <span className="space absolute right-0 w-[30px] h-[30px]"></span>
        <span className="text-[#5e6266] ml-3">Port Harcourt</span>
      </button>
      <span>
        <SwapHorizIcon />
      </span>
      <button
        className="flex mx-2 border-2 p-3 items-center w-[180px]"
        onClick={() => {
          dispatch(setchooseLocationWhereTo("where-to"));
        }}
      >
        <EditLocationIcon />
        <span className="text-[#5e6266] ml-3">Where to ?</span>
      </button>
    </div>
  );
}
