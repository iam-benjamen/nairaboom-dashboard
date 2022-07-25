import {
  Box,
  Text,
  Avatar,
  Link,
  Input,
  Checkbox,
  Select,
} from "@chakra-ui/react";
import Image from "next/image";
import avatar from "../public/dashboard/avatar.svg";
import notificationbell from "../public/dashboard/notification.svg";
import Wrapper from "../components/Wrapper";

const CashBack = () => {
  return (
    <Wrapper>
      <Box
        display={"flex"}
        justifyContent="space-between"
        alignItems={"center"}
        pb="2.25rem"
      >
        <Text fontWeight={700} fontSize="1.5rem" color="nairablue">
          Get Cashback
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
      <Box
        display={"flex"}
        alignItems="center"
        flexDir={"column"}
        justifyContent="center"
        margin={"auto"}
        w={{base:"90%",md:"60%"}}
      >
        <Text
          lineHeight={"1.8rem"}
          color="nairablue"
          textAlign={"center"}
          fontWeight={500}
          fontSize={{base:"1rem",md:"1.2rem"}}
          pb={{base:"3rem",md:"4.25rem"}}
        >
          Wish to get cashback for your transaction? <br /> Fill the form below
        </Text>
        <form action="">
          <Box display={"flex"} flexDir="column" w="100%">
            <Input
              w={{ base: "100%", md: "28rem" }}
              h="4rem"
              type={"text"}
              placeholder={"Payout to wallet"}
              _placeholder={{
                fontSize: "16px",
                color: "#A7A7A7",
                fontWeight: 500,
              }}
              bgColor="#EDEBEB"
              mb={{base:"1.5rem",md:"2.5rem"}}
              focusBorderColor="none"
              border={"none"}
              readOnly
            />
            <Input
              placeholder="Amount"
              w={{ base: "100%", md: "28rem" }}
              h="4rem"
              border={"none"}
              bgColor="white"
              type={"number"}
              _placeholder={{
                fontSize: "16px",
                color: "#A7A7A7",
                fontWeight: 500,
              }}
              mb={{base:"1.5rem",md:"2.5rem"}}
              focusBorderColor="nairagreen"
            />
            <Select
              w={{ base: "100%", md: "28rem" }}
              h="4rem"
              border={"none"}
              bgColor="white"
              placeholder="Transaction Type"
              _placeholder={{ fontWeight: 500 }}
              mb={{base:"1.5rem",md:"2.5rem"}}
              color={"#A7A7A7"}
              focusBorderColor="nairagreen"
            >
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
            </Select>
            <Input
              placeholder="Choose Lucky Time(24hr format)"
              w={{ base: "100%", md: "28rem" }}
              h="4rem"
              border={"none"}
              color={"#A7A7A7"}
              _before={{
                content: `"Choose Lucky Time(24hr format)"`,
                postion: "absolute",
                width: "60%",
                fontSize: "sm",
                fontWeight: 500,
              }}
              _focus={{ _before: { content: `""`, w: 0 } }}
              bgColor="white"
              type={"time"}
              _placeholder={{
                fontWeight: 500,
                fontSize: "16px",
                color: "#A7A7A7",
              }}
              mb={{base:"1.5rem",md:"2.5rem"}}
              focusBorderColor="nairagreen"
            />
            <Input
              placeholder="Boost Code(if any)"
              w={{ base: "100%", md: "28rem" }}
              h="4rem"
              border={"none"}
              color={"#A7A7A7"}
              bgColor="white"
              type={"text"}
              _placeholder={{
                fontWeight: 500,
                fontSize: "16px",
                color: "#A7A7A7",
              }}
              mb="3rem"
              focusBorderColor="nairagreen"
            />
            <Checkbox mb="2rem" colorScheme={"green"} color="#A7A7A7">
              I agree to the terms and conditions
            </Checkbox>
            <Input
              value={"Proceed"}
              border={"none"}
              w="80%"
              color="white"
              bgGradient="linear(180deg, #02D95A 0%, #02B54C 100%)"
              type={"submit"}
              fontWeight={600}
              fontSize="lg"
              mb={{base:"2rem",md:"4rem"}}
              cursor={"pointer"}
            />
          </Box>
        </form>
      </Box>
    </Wrapper>
  );
};

export default CashBack;
