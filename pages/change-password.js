import { Box, Text, Avatar, Link, Input, Button } from "@chakra-ui/react";
import notificationbell from "../public/dashboard/notification.svg";
import avatar from "../public/dashboard/avatar.svg";
import Image from "next/image";

const ChangePassword = () => {
  return (
    <Box
      bgColor={"#F5F5F5"}
      borderRadius="2rem"
      mt="2rem"
      mb="4.8rem"
      mr="5rem"
      pl="3.8rem"
      pt="2.5rem"
      pr="4.8rem"
      pb="6.3rem"
      float="right"
      width={"calc(100% - 30rem)"}
      fontFamily="poppins"
      display={"flex"}
      flexDir="column"
    >
      <Box
        display={"flex"}
        justifyContent="space-between"
        alignItems={"center"}
        pb="8rem"
      >
        <Text fontWeight={700} fontSize="1.5rem" color="nairablue">
          Change Password
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
          margin={"auto"}
          w="50%"
          gap="3.25rem"
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
              h="5rem"
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
              h="5rem"
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
              h="5rem"
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
            mt="5rem"
          >
            Update
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ChangePassword;
