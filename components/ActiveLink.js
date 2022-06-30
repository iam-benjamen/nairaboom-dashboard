import NextLink from "next/link";
import Image from "next/image";
import { Box, Link, Text } from "@chakra-ui/react";

const ActiveLink = (props) => {
  return (
    <NextLink href={props.href} passHref key={props.key}>
      <Box
        borderRadius={"8px"}
        as={Link}
        display="flex"
        bg={props.bg}
        w="max-content"
        minW="90%"
        justifyContent={"flex-start"}
        gap="1.18rem"
        py="1rem"
        pl="2rem"
        pr="1rem"
        transitionDuration={".3s"}
        _hover={{ textDecoration: "none", bg: "currentlink" }}
      >
        <Image
          src={props.icon}
          alt="home icon"
          width={props.width}
          height={props.height}
        />
        <Text color={props.color} fontWeight={500} fontSize="xl">
          {props.name}
        </Text>
      </Box>
    </NextLink>
  );
};

export default ActiveLink;
