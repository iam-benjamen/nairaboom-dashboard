import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../public/dashboard-logo.svg";
const NavBar = () => {
  return (
    <Box
      bgColor={"nairablue"}
      h="5.1875rem"
      display={"flex"}
      alignItems="center"
      pl={"4.5rem"}
    >
      <Box>
        <Image fill="white" src={logo} alt="dashboard logo" />
      </Box>
    </Box>
  );
};

export default NavBar;
