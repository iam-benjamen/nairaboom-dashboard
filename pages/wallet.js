import {
  Box,
  Avatar,
  Text,
  Link,
  chakra,
  Heading,
  Input,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
} from "@chakra-ui/react";
import Image from "next/image";
import notificationbell from "../public/dashboard/notification.svg";
import avatar from "../public/dashboard/avatar.svg";
import winning from "../public/winning/winning-icon.png";
import nairasign from "../public/dashboard/Nairasign.svg";
import NextLink from "next/link";
import dateIcon from "../public/wallet/date-icon.png";
import searchIcon from "../public/wallet/search-icon.png";
import redDot from "../public/wallet/red-dot.png";
import greenDot from "../public/wallet/green-dot.png";
import smallnairasign from "../public/wallet/nairasign.png";
import Wrapper from "../components/Wrapper";

const Wallet = () => {
  return (
    <Wrapper>
      <Box
        display={"flex"}
        justifyContent="space-between"
        alignItems={"center"}
        pb={{ base: "2.5rem", md: "4rem" }}
      >
        <Text
          fontWeight={700}
          fontSize={{ base: "1.25rem", md: "1.5rem" }}
          color="nairablue"
        >
          My Wallet
        </Text>
        <Box display={"flex"} alignItems="center" gap="1.6rem">
          <Box as={Link} cursor="pointer">
            <Image src={notificationbell} alt="notification bell" />
          </Box>
          <Box as={NextLink} href="/editprofile">
            <Avatar
              name="Muhammed Cynthia"
              src={avatar.src}
              bg="rgba(30, 215, 96, 0.19)"
              cursor={"pointer"}
            />
          </Box>
        </Box>
      </Box>
      <Box
        bgColor={"white"}
        borderRadius="20px"
        display={"flex"}
        flexDir={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent={"space-between"}
        pl="1.1rem"
        gap={{ base: "0rem", md: "1.25rem" }}
        w="100%"
        pb=".8rem"
        pr="2rem"
        pt={{ base: "1.5rem", md: "2.5rem" }}
      >
        <Box
          display={"flex"}
          pb={{ base: "1rem", md: "1.6rem" }}
          gap={"1.375rem"}
        >
          <Box w="100%">
            <Image src={winning} alt="winning icon" />
          </Box>
          <Box display={"flex"} flexDir="column">
            <Text fontWeight={500} color="nairagrey" fontSize={"xl"}>
              Balance
            </Text>
            <Text
              color="nairablue"
              fontWeight={700}
              fontSize={{ base: "2rem", md: "2.5rem" }}
            >
              &#8358;60,000
            </Text>
          </Box>
        </Box>
        <Box display={"flex"} alignItems="flex-end" gap="1.7rem" maxW={"90%"}>
          <NextLink href="/daily-winners" passHref>
            <Link
              fontWeight={600}
              fontSize=".8rem"
              bgColor="white"
              color="#02C251"
              borderRadius="3px"
              transition={"all ease-in-out .4s"}
              _hover={
                {
                  // color: "white",
                  // bg: "nairagreen",
                }
              }
              textAlign="center"
              w="8.6rem"
              border={"1px solid"}
              py=".8rem"
            >
              Fund Wallet
            </Link>
          </NextLink>
          <NextLink href="/daily-winners" passHref>
            <Link
              fontWeight={600}
              fontSize=".8rem"
              bgColor="nairagreen"
              color="white"
              borderRadius="3px"
              transition={"all ease-in-out .4s"}
              _hover={
                {
                  // color: "white",
                  // bg: "nairagreen",
                }
              }
              textAlign="center"
              py={".8rem"}
              w="8.6rem"
              boxShadow={"inner"}
              bgGradient="linear(180deg, #02D95A 0%, #02B54C 100%)"
            >
              Withdraw
            </Link>
          </NextLink>
        </Box>
      </Box>
      <Box pt="3.3rem" fontFamily={"poppins"}>
        <Heading
          fontWeight={700}
          fontSize={{ base: "1.25rem", md: "1.875rem" }}
          color="nairablue"
          fontFamily={"poppins"}
        >
          Transaction History
        </Heading>
        <Box
          display={"flex"}
          w={{ base: "100%", md: "70%" }}
          mt="1.5rem"
          gap="2.4rem"
        >
          <Box
            h="2.6rem"
            w={{ base: "90%", md: "9.3rem" }}
            pl={"1rem"}
            bgColor="white"
            display={"flex"}
            alignItems={"center"}
            borderRadius="4px"
          >
            <Image src={dateIcon} alt="search icon" />
            <Input
              border={"none"}
              type="text"
              focusBorderColor="transparent"
              placeholder="Date"
              _placeholder={{ fontSize: "0.6rem", color: "nairagrey" }}
              h="100%"
            />
          </Box>
          <Box
            h="2.6rem"
            w={{ base: "90%", md: "18.8rem" }}
            pl={"1.5rem"}
            bgColor="white"
            display={"flex"}
            alignItems={"center"}
            borderRadius="6px"
          >
            <Image src={searchIcon} alt="search icon" />
            <Input
              border={"none"}
              type="search"
              px={".5rem"}
              focusBorderColor="transparent"
              placeholder="Search"
              _placeholder={{
                fontSize: ".6rem",
                ml: { base: "1.5rem", md: "2rem" },
              }}
              h="100%"
            />
          </Box>
        </Box>
        <Box w={{ base: "100%", md: "75%" }} mt="2.4rem" fontFamily={"poppins"}>
          <Tabs isFitted variant="unstyled">
            <TabList
              border="1px solid #DCDADA"
              borderRadius={"10px"}
              h="3.25rem"
            >
              <Tab
                fontSize={".9rem"}
                color={"nairagrey"}
                _selected={{
                  color: "white",
                  bg: "#1ED760",
                  borderLeftRadius: "10px",
                }}
              >
                All
              </Tab>
              <Tab
                fontSize={".9rem"}
                color={"nairagrey"}
                _selected={{
                  color: "white",
                  bg: "#1ED760",
                }}
              >
                Credit
              </Tab>
              <Tab
                fontSize={".9rem"}
                color={"nairagrey"}
                _selected={{
                  color: "white",
                  bg: "#1ED760",
                  borderRightRadius: "10px",
                }}
              >
                Debit
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Box pt="1rem" display={"flex"} justifyContent="space-between">
                  <Box display={"flex"} gap=".7rem">
                    <chakra.span>
                      {" "}
                      <Image src={greenDot} alt="green dot" />
                    </chakra.span>
                    <Box display="flex" flexDir="column">
                      <Text color="nairablue" fontSize={"18px"}>
                        Withrawal Made
                      </Text>
                      <Text color="nairagrey" fontSize={"13px"}>
                        24 Apr 2021, 04:30pm
                      </Text>
                    </Box>
                  </Box>
                  <Text color="nairablue" fontWeight={600} fontSize="1.125rem">
                    <chakra.span>
                      <Image src={smallnairasign} alt="nairasign" />
                    </chakra.span>
                    60,000
                  </Text>
                </Box>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Wallet;
