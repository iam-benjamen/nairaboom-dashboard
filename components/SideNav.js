import { Box, Text, Avatar, Link } from "@chakra-ui/react";
import Image from "next/image";
import avatar from "../public/sidenav/avatar.png";
import blackhomeicon from "../public/sidenav/home.svg";
import greyhomeicon from "../public/sidenav/greyhome.svg";
import greycashback from "../public/sidenav/greycashback.svg";
import blackcashback from "../public/sidenav/blackcashback.svg";
import blackwinning from "../public/sidenav/blackwinning.svg";
import greywinning from "../public/sidenav/greywinning.svg";
import greywallet from "../public/sidenav/greywallet.svg";
import blackwallet from "../public/sidenav/blackwallet.svg";
import greyhistory from "../public/sidenav/greyhistory.svg";
import blackhistory from "../public/sidenav/blackhistory.svg";
import greychange from "../public/sidenav/greychange.svg";
import blackchange from "../public/sidenav/blackchange.svg";
import greyedit from "../public/sidenav/greyedit.svg";
import blackedit from "../public/sidenav/blackedit.svg";
import logout from "../public/sidenav/logout.png";
import ActiveLink from "./ActiveLink";
import { useRouter } from "next/router";
import NextLink from "next/link";

const SideNav = () => {
  const router = useRouter();
  const DashboardLink = [
    [
      "Dashboard",
      "/",
      `${blackhomeicon.src}`,
      `${greyhomeicon.src}`,
      "19px",
      "20px",
    ],
    [
      "Get Cashback",
      "/cashback",
      `${blackcashback.src}`,
      `${greycashback.src}`,
      "26px",
      "27px",
    ],
    [
      "My Winnings",
      "/winnings",
      `${blackwinning.src}`,
      `${greywinning.src}`,
      "25px",
      "21px",
    ],
    [
      "My Wallet",
      "/winning",
      `${blackwallet.src}`,
      `${greywallet.src}`,
      "19px",
      "18.69px",
    ],
    [
      "My Request History",
      "/winning",
      `${blackhistory.src}`,
      `${greyhistory.src}`,
      "16px",
      "21px",
    ],
  ];

  const DashboardLink2 = [
    [
      "Edit Profile",
      "/winning",
      `${blackedit.src}`,
      `${greyedit.src}`,
      "16px",
      "20px",
    ],
    [
      "Change Password",
      "/winning",
      `${blackchange.src}`,
      `${greychange.src}`,
      "19px",
      "20px",
    ],
  ];
  return (
    <Box
      w="25rem"
      bgColor={"white"}
      h={"max-content"}
     
      float="left"
      display="flex"
      flexDir="column"
      pl="3.9rem"
      pt="2.5rem"
      pr="3.5rem"
      pb="9.3rem"
      fontFamily={"poppins"}
    >
      <Box pb={"1.3rem"} display={"flex"} alignItems="center" gap="1.05rem">
        <Avatar
          name="Muhammed Cynthia"
          src={avatar.src}
          bg="rgba(30, 215, 96, 0.19)"
        />
        <Text fontWeight={500} fontSize={"xl"}>
          Muhammed Cynthia
        </Text>
      </Box>
      <hr />
      <Box gap="1.5rem" pt="2.125rem" display={"flex"} flexDir="column">
        {DashboardLink.map((dashboard, index) =>
          router.pathname == `${dashboard[1]}` ? (
            <ActiveLink
              key={index}
              bg="currentlink"
              color="nairablue"
              icon={dashboard[2]}
              name={dashboard[0]}
              href={dashboard[1]}
              width={dashboard[4]}
              height={dashboard[5]}
            />
          ) : (
            <ActiveLink
              key={index}
              bg="white"
              color="#A7A7A7"
              icon={dashboard[3]}
              name={dashboard[0]}
              href={dashboard[1]}
              width={dashboard[4]}
              height={dashboard[5]}
            />
          )
        )}
      </Box>
      <Box pt="15rem" gap="1.5rem" display={"flex"} flexDir="column">
        {DashboardLink2.map((dashboard, index) =>
          router.pathname == `${dashboard[1]}` ? (
            <ActiveLink
              key={index}
              bg="currentlink"
              color="nairablue"
              icon={dashboard[2]}
              name={dashboard[0]}
              href={dashboard[1]}
              width={dashboard[4]}
              height={dashboard[5]}
            />
          ) : (
            <ActiveLink
              key={index}
              bg="white"
              color="#A7A7A7"
              icon={dashboard[3]}
              name={dashboard[0]}
              href={dashboard[1]}
              width={dashboard[4]}
              height={dashboard[5]}
            />
          )
        )}
      </Box>
      <NextLink href="/" passHref>
        <Box
          _hover={{ textDecoration: "none" }}
          gap="1.18rem"
          mt="2.5rem"
          pl="2rem"
          as={Link}
          display="flex"
          alignItems="center"
        >
          <Image src={logout} alt="logout icon" />
          <Text color="#FF4B4B" fontWeight={500} fontSize="xl">
            Log Out
          </Text>
        </Box>
      </NextLink>
    </Box>
  );
};

export default SideNav;
