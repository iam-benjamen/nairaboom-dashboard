import { Box } from "@chakra-ui/react";

const Wrapper = ({ children }) => {
  return (
    <Box
      bgColor={"#F5F5F5"}
      borderRadius="2rem"
      mt="2rem"
      mb="4.8rem"
      mr="3rem"
      pl="3.8rem"
      pt="2.5rem"
      pr={{base:"2rem",lg:"4rem"}}
      pb="6.3rem"
      float="right"
      width={{ base: "90%", lg: "68%" }}
      fontFamily="poppins"
    >
      {children}
    </Box>
  );
};

export default Wrapper;
