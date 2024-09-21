"use client";
import React, { useState } from "react";
import { Box, Grid2, Typography } from "@mui/material";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Grid2
      container
      spacing={2}
      sx={{ alignItems: "center", justifyContent: "center" }}
    >
      <Box sx={{ paddingTop: "20px" }}>
        <Typography variant="h3">NERD</Typography>
      </Box>
    </Grid2>
  );
};

export default Navbar;

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};
