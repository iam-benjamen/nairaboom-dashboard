import { Box, Text, Input, Avatar, Button, Link } from "@chakra-ui/react";
import Image from "next/image";
import notificationbell from "../public/dashboard/notification.svg";
import avatar from "../public/dashboard/avatar.svg";
import searchIcon from "../public/dashboard/search.png";
import transaction from "../public/dashboard/transactions.svg";
import amount from "../public/dashboard/amount.svg";
import NextLink from "next/link";
import winning from "../public/winning/winning-icon.png";
import Wrapper from "../components/Wrapper";

const Winnings = () => {
  return (
    <Wrapper
    >
      <Box
        display={"flex"}
        justifyContent="space-between"
        alignItems={"center"}
        pb="2.25rem"
      >
        <Text fontWeight={700} fontSize="1.5rem" color="nairablue">
          My Winnings
        </Text>
        <Box display={"flex"} alignItems="center" gap="1.6rem">
          <Box as={Link} cursor="pointer">
            <Image src={notificationbell} alt="notification bell" />
          </Box>
          <Avatar
            name="Muhammed Cynthia"
            src={avatar.src}
            bg="rgba(30, 215, 96, 0.19)"
          />
        </Box>
      </Box>
      <form action="">
        <Box
          display={"flex"}
          w={"16.7rem"}
          h="2.5rem"
          borderRadius={"5px"}
          bgColor={"white"}
        >
          <Input
            type="text"
            placeholder="Search"
            h="100%"
            focusBorderColor="none"
            border={"none"}
            _placeholder={{ color: "#A7A7A7" }}
          />
          <Button
            float={"right"}
            type="submit"
            bgColor={"nairagreen"}
            w="3rem"
            h="inherit"
            _hover={{}}
          >
            <Image src={searchIcon} alt="search icon" />
          </Button>
        </Box>
      </form>
      <Box
        pt="2.2rem"
        pb="3.8rem"
        display={"flex"}
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Box
          bgColor={"white"}
          borderRadius="20px"
          display={"flex"}
          alignItems="center"
          justifyContent={"space-between"}
          pl="2rem"
          gap="1.25rem"
          w="100%"
          py="2.5rem"
          pr="2.68rem"
          boxShadow={"md"}
        >
          <Box display={"flex"} gap={"1.375rem"}>
            <Box>
              <Image src={winning} alt="total transactions" />
            </Box>
            <Box display={"flex"} flexDir="column">
              <Text fontSize={"xl"} fontWeight={500} color={"nairagrey"}>
                Total Winnings
              </Text>
              <Text color="nairablue" fontWeight={700} fontSize="2.75rem">
                06
              </Text>
            </Box>
          </Box>
          <NextLink href="/daily-winners" passHref>
            <Link
              fontWeight={600}
              fontSize=".8rem"
              bgColor="nairagreen"
              color="white"
              borderRadius="md"
              transition={"all ease-in-out .4s"}
              _hover={{
                color: "nairagreen",
                bg: "white",
                border: "1px solid",
                borderColor: "nairagreen",
              }}
              textAlign="center"
              py={"1rem"}
              w="11rem"
              mt="1.5rem"
              boxShadow={"inner"}
              bgGradient="linear(180deg, #02D95A 0%, #02B54C 100%)"
              alignSelf={"flex-end"}
            >
              View Daily Winners
            </Link>
          </NextLink>
        </Box>
      </Box>
      <Box display={"flex"} w="90%" flexDir="column" gap="2.75rem">
        <Text color="nairablue" fontWeight={700} fontSize="1.5rem">
          My Winning History
        </Text>
        <Box display={"flex"} justifyContent="space-between" px="1rem">
          <Text color="nairagrey" fontWeight={500} fontSize="1.5rem">
            S/N
          </Text>
          <Text color="nairagrey" fontWeight={500} fontSize="1.5rem">
            Timestamp
          </Text>
          <Text color="nairagrey" fontWeight={500} fontSize="1.5rem">
            Amount won
          </Text>
        </Box>
        <Box display={"flex"} flexDir="column" gap="2rem">
          <Box
            display={"flex"}
            justifyContent="space-between"
            pl="1.5rem"
            pr="2.5rem"
          >
            <Text fontSize={"lg"} color="nairablue" fontWeight={400}>
              1
            </Text>
            <Text fontSize={"lg"} color="nairablue" fontWeight={400}>
              14:20:34
            </Text>
            <Text fontSize={"lg"} color="nairablue" fontWeight={400}>
              24, Apr 2021
            </Text>
          </Box>
          <Box
            display={"flex"}
            justifyContent="space-between"
            pl="1.5rem"
            pr="2.5rem"
          >
            <Text fontSize={"lg"} color="nairablue" fontWeight={400}>
              2
            </Text>
            <Text fontSize={"lg"} color="nairablue" fontWeight={400}>
              14:20:34
            </Text>
            <Text fontSize={"lg"} color="nairablue" fontWeight={400}>
              24, Apr 2021
            </Text>
          </Box>
          <Box
            display={"flex"}
            justifyContent="space-between"
            pl="1.5rem"
            pr="2.5rem"
          >
            <Text fontSize={"lg"} color="nairablue" fontWeight={400}>
              3
            </Text>
            <Text fontSize={"lg"} color="nairablue" fontWeight={400}>
              14:20:34
            </Text>
            <Text fontSize={"lg"} color="nairablue" fontWeight={400}>
              24, Apr 2021
            </Text>
          </Box>
          <Box
            display={"flex"}
            justifyContent="space-between"
            pl="1.5rem"
            pr="2.5rem"
          >
            <Text fontSize={"lg"} color="nairablue" fontWeight={400}>
              4
            </Text>
            <Text fontSize={"lg"} color="nairablue" fontWeight={400}>
              14:20:34
            </Text>
            <Text fontSize={"lg"} color="nairablue" fontWeight={400}>
              24, Apr 2021
            </Text>
          </Box>
          <Box
            display={"flex"}
            justifyContent="space-between"
            pl="1.5rem"
            pr="2.5rem"
          >
            <Text fontSize={"lg"} color="nairablue" fontWeight={400}>
              5
            </Text>
            <Text fontSize={"lg"} color="nairablue" fontWeight={400}>
              14:20:34
            </Text>
            <Text fontSize={"lg"} color="nairablue" fontWeight={400}>
              24, Apr 2021
            </Text>
          </Box>
          <Box
            display={"flex"}
            justifyContent="space-between"
            pl="1.5rem"
            pr="2.5rem"
          >
            <Text fontSize={"lg"} color="nairablue" fontWeight={400}>
              6
            </Text>
            <Text fontSize={"lg"} color="nairablue" fontWeight={400}>
              14:20:34
            </Text>
            <Text fontSize={"lg"} color="nairablue" fontWeight={400}>
              24, Apr 2021
            </Text>
          </Box>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Winnings;
