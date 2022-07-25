import { Box, Text, Avatar, Link, Input, Button } from "@chakra-ui/react";
import notificationbell from "../public/dashboard/notification.svg";
import avatar from "../public/dashboard/avatar.svg";
import Image from "next/image";
import Wrapper from "../components/Wrapper";
import NextLink from "next/link";

const ChangePassword = () => {
  return (
    <Wrapper>
      <Box
        display={"flex"}
        justifyContent="space-between"
        alignItems={"center"}
        pb={{ base: "5rem", md: "8rem" }}
      >
        <Text
          fontWeight={700}
          fontSize={{ base: "1rem", md: "1.5rem" }}
          color="nairablue"
        >
          Change Password
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
      <form action="">
        <Box
          margin={"auto"}
          w={{ base: "85%", md: "50%" }}
          gap={{ base: "2rem", md: "3.25rem" }}
          display={"flex"}
          flexDir="column"
        >
          <Box w="100%">
            <label htmlFor="name">
              <Text color="nairagrey" fontWeight={500} fontSize="xl">
                Current Password
              </Text>{" "}
            </label>
            <Input
              _placeholder={{
                fontSize: "15px",
                fontWeight: 400,
                color: "niaragrey",
              }}
              h={{ base: "3.5rem", md: "5rem" }}
              border={"none"}
              bgColor={"white"}
              type="text"
              placeholder="Enter old password"
              focusBorderColor="nairagreen"
              mt=".7rem"
            />
          </Box>
          <Box w="100%">
            <label htmlFor="name">
              <Text color="nairagrey" fontWeight={500} fontSize="xl">
                New Password
              </Text>{" "}
            </label>
            <Input
              _placeholder={{
                fontSize: "15px",
                fontWeight: 400,
                color: "niaragrey",
              }}
              h={{ base: "3.5rem", md: "5rem" }}
              border={"none"}
              bgColor={"white"}
              type="text"
              placeholder="Enter your new password"
              focusBorderColor="nairagreen"
              mt=".7rem"
            />
          </Box>
          <Box w="100%">
            <label htmlFor="name">
              <Text color="nairagrey" fontWeight={500} fontSize="xl">
                Confirm Password
              </Text>{" "}
            </label>
            <Input
              _placeholder={{
                fontSize: "15px",
                fontWeight: 400,
                color: "niaragrey",
              }}
              h={{ base: "3.5rem", md: "5rem" }}
              border={"none"}
              bgColor={"white"}
              type="text"
              placeholder="Confirm new password"
              focusBorderColor="nairagreen"
              mt=".7rem"
            />
          </Box>
          <Button
            color="white"
            bgGradient="linear(180deg, #02D95A 0%, #02B54C 100%)"
            py=".5rem"
            mt={{ base: "3rem", md: "5rem" }}
            _hover={{}}
          >
            Update
          </Button>
        </Box>
      </form>
    </Wrapper>
  );
};

export default ChangePassword;
