import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface locationSliceTypes {
  chooseLocation: boolean;
  type: defaultLocationOption;
}

type defaultLocationOption = "where-to" | "current";
const initialState: locationSliceTypes = {
  chooseLocation: false,
  type: "current",
};

export const locationSlice = createSlice({
  name: "locationStore",
  initialState,
  reducers: {
    setChooseLocation: (state, action: PayloadAction<void>) => {
      state.chooseLocation = !state.chooseLocation;
    },
    setLocationType: (state, action: PayloadAction<defaultLocationOption>) => {
      state.type = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setChooseLocation } = locationSlice.actions;

export default locationSlice.reducer;
