import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";

import ListItemText from "@mui/material/ListItemText";
import { useAppDispatch } from "../../redux/hooks";
import {
  setchooseLocationWhereTo,
  setSelectedWhereToLocation,
} from "../../redux/features/bookFlightSlice";
import { flights_schedules } from "../../helpers";

export default function WhereToModalPage() {
  const dispatch = useAppDispatch();

  return (
    <Box className="fixed top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] z-50 bg-white overflow-hidden">
      <Box className="flex w-full justify-between items-center p-5 border-b-2">
        <div className="flex items-center">
          <ArrowBackIcon
            onClick={() => {
              dispatch(setchooseLocationWhereTo("where-to"));
            }}
          />
          <span className="text ml-2">Nanaimo, Britis Columbia</span>
        </div>
        <div className="plys">
          <AddIcon />
        </div>
      </Box>
      <Box>
        <Paper sx={{ width: "100%" }}>
          <MenuList dense>
            {["lagos", "abuja", "acra", "london"].map((item) => (
              <MenuItem>
                <ListItemText
                  inset
                  onClick={() => {
                    dispatch(setSelectedWhereToLocation(item));
                    dispatch(setchooseLocationWhereTo("where-to"));
                  }}
                >
                  {item}
                </ListItemText>
              </MenuItem>
            ))}
          </MenuList>
        </Paper>
      </Box>
    </Box>
  );
}
