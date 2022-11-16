import * as React from "react";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import CheckIcon from "@mui/icons-material/Check";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

interface Props {
  options: Array<string>;
  Icon?: any;
  name: string | number;
}

export default function DrodownWithIcon({ options, Icon, name }: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: "background.paper" }}
      >
        <Button
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
        >
          {Icon && (
            <IconButton>
              <Icon />
            </IconButton>
          )}
          <span className="text-gray-700 sm:text-xl text-[12px]">{name}</span>
          <span>
            {open ? (
              <IconButton>
                <ArrowDropUpIcon />
              </IconButton>
            ) : (
              <IconButton>
                <ArrowDropDownIcon />
              </IconButton>
            )}
          </span>
        </Button>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            <div className="w-full flex justify-end items-center">
              <span>
                {index === selectedIndex && (
                  <IconButton>
                    <CheckIcon />
                  </IconButton>
                )}
              </span>
              <span>{option}</span>
            </div>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
