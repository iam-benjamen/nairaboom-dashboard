import { Box, Text, Link } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../public/dashboard-logo.svg";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import SideNavMobile from "./sideNavMobile.js";
import { useState, useContext } from "react";
import { AppContext } from "../context/context";

const NavBar = () => {
  const [monitorIcon, setMonitorIcon] = useContext(AppContext);

  const openNav = function () {
    let sideNav = document.getElementById("mySidenav");
    const sidenav = document.getElementById("mobile__sidenav");
    sideNav.style.width = "max-content";
    sideNav.style.height = "max-content";
    sidenav.style.display = "flex";
    setMonitorIcon(false);
  };

  const closeNav = function () {
    let sideNav = document.getElementById("mySidenav");
    sideNav.style.width = 0;
    setMonitorIcon(true);
  };

  return (
    <Box
      bgColor={"nairablue"}
      h="5.2rem"
      display={"flex"}
      alignItems="center"
      px={{ base: "2rem", md: "3rem", lg: "4.5rem" }}
      justifyContent={{ base: "space-between", lg: "flex-start" }}
      flexDir={{ base: "row-reverse", lg: "row" }}
    >
      <Box
        display={{ base: "block", lg: "none" }}
        border="2px solid white"
        borderRadius={"2px"}
      >
        {monitorIcon ? (
          <HamburgerIcon
            w="2.5rem"
            h="2rem"
            color="nairagreen"
            cursor="pointer"
            onClick={openNav}
          />
        ) : (
          <Link
            to={null}
            alignSelf={"start"}
            className="closebtn"
            onClick={closeNav}
          >
            <CloseIcon w="2.5rem" h="2rem" py=".5rem" color={"nairagreen"} />
          </Link>
        )}

        <Box
          id="mySidenav"
          className="sidenav"
          height={"100%"}
          top={0}
          left={0}
          zIndex={999}
          overflowX="hidden"
          bgColor="white"
          position={"absolute"}
          transition="all 0.5s"
          mt="5.19rem"
          h={0}
        >
          <SideNavMobile />
        </Box>
      </Box>
      <Box>
        <Image fill="white" src={logo} alt="dashboard logo" />
      </Box>
    </Box>
  );
};

export default NavBar;
