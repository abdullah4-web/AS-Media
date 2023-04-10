import { Stack , Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { SearchBar } from "./";
import image from "./logo.png";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={image} alt="logo" height={60} />
    </Link>
    
    <SearchBar />
  </Stack>
);

export default Navbar;
