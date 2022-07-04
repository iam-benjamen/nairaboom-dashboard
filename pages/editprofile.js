import {
  Box,
  Link,
  Text,
  Avatar,
  Input,
  Divider,
  Button,
} from "@chakra-ui/react";
import avatar from "../public/edit-profile/avatar.png";
import Image from "next/image";

const EditProfile = () => {
  return (
    <Box
      pl="3.8rem"
      pt="2.5rem"
      float="right"
      width={"calc(100% - 30rem)"}
      fontFamily="poppins"
      bgColor={"#F5F5F5"}
      borderRadius="2rem"
      mt="2rem"
      pb="4rem"
    >
      <Text fontWeight={700} fontSize="1.5rem" pb="6rem">
        Edit Profile
      </Text>
      <Box display={"flex"} flexDir="column" pl="9rem">
        <Box gap="2.125rem" display={"flex"} alignItems="center">
          <Avatar
            src={avatar.src}
            name="Muhammed Cynthia"
            bg="rgba(30, 215, 96, 0.19)"
            size={"14rem"}
          />
          <Text
            fontWeight={500}
            fontSize="xl"
            color="nairablue"
            position={"relative"}
            textDecor="underline"
            cursor={"pointer"}
          >
            Change Image
            <Input
              type="file"
              border={"none"}
              placeholder="Change Image"
              aria-hidden="true"
              accept="image/*"
              position={"absolute"}
              width={"100%"}
              height={"100%"}
              top={0}
              left={0}
              opacity={0}
            />
          </Text>
        </Box>

        <Text
          pt="4.9rem"
          pb="3.1rem"
          fontWeight={600}
          color="nairagrey"
          fontSize={"xl"}
        >
          Personal Biodata
        </Text>

        <Box w="80%">
          <Box
            display={"flex"}
            // justifyContent="space-between"
            gap="9.125rem"
            alignItems={"center"}
          >
            <Text fontWeight={500} color="nairagrey" fontSize={"1rem"}>
              Full Name
            </Text>
            <Text fontWeight={500} color="nairagrey" fontSize={"1.2rem"}>
              Muhammed Cynthia
            </Text>
          </Box>
          <Box h="4px" mt=".8rem" bgColor="white" borderRadius={"4px"}></Box>
        </Box>
        <Box w="80%" pt="2.35rem">
          <Box
            display={"flex"}
            // justifyContent="space-between"
            gap="6.8125rem"
            alignItems={"center"}
          >
            <Text fontWeight={500} color="nairagrey" fontSize={"1rem"}>
              Phone Number
            </Text>
            <Text fontWeight={500} color="nairagrey" fontSize={"1.2rem"}>
              +234-8094647438
            </Text>
          </Box>
          <Box h="4px" mt=".8rem" bgColor="white" borderRadius={"4px"}></Box>
        </Box>
        <Box w="80%" pt="2.35rem">
          <Box
            display={"flex"}
            // justifyContent="space-between"
            gap="11.25rem"
            alignItems={"center"}
          >
            <Text fontWeight={500} color="nairagrey" fontSize={"1rem"}>
              Email
            </Text>
            <Text fontWeight={500} color="nairagrey" fontSize={"1.2rem"}>
              Muhammedcynthia@gmail.com
            </Text>
          </Box>
        </Box>
      </Box>
      <Button
        color="white"
        bgGradient="linear(180deg, #02D95A 0%, #02B54C 100%)"
        margin={"auto"}
        mt="6.825rem"
        w="50%"
        h="3rem"
      >
        Edit Profile
      </Button>
    </Box>
  );
};

export default EditProfile;
