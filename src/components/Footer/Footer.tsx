import { Box } from "@mui/material";
import React from "react";

export default function Footer() {
  const footerData = [
    "About",
    "Privacy",
    "Terms",
    "Join user studies",
    "Feedback",
    "Help Center",
  ];
  return (
    <Box>
      <ul className="flex items-center gap-2 text-center justify-center">
        {footerData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="end">
        <p>
          Displayed currencies may differ from the currencies used to purchase
          flights. <a href="void:javascriptoid(0)">Learn more</a>
        </p>
      </div>
    </Box>
  );
}
