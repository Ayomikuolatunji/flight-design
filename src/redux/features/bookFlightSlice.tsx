import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface locationSliceTypes {
  chooseLocationCurrent: boolean;
  chooseLocationWhereTo: boolean;
  selectedWhereToLocation: string;
  type: defaultLocationOption;
}

type defaultLocationOption = "where-to" | "current";
const initialState: locationSliceTypes = {
  chooseLocationCurrent: false,
  chooseLocationWhereTo: false,
  selectedWhereToLocation: "",
  type: "current",
};

export const locationSlice = createSlice({
  name: "locationStore",
  initialState,
  reducers: {
    setChooseCurrenLocation: (
      state,
      action: PayloadAction<defaultLocationOption>
    ) => {
      state.chooseLocationCurrent = !state.chooseLocationCurrent;
      state.type = action.payload;
    },
    setchooseLocationWhereTo: (
      state,
      action: PayloadAction<defaultLocationOption>
    ) => {
      state.chooseLocationWhereTo = !state.chooseLocationWhereTo;
      state.type = action.payload;
    },
    setSelectedWhereToLocation: (state, action: PayloadAction<string>) => {
      state.selectedWhereToLocation = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setChooseCurrenLocation,
  setchooseLocationWhereTo,
  setSelectedWhereToLocation,
} = locationSlice.actions;

export default locationSlice.reducer;
