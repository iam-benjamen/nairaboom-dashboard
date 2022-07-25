import { Box } from "@chakra-ui/react";

const Wrapper = ({ children }) => {
  return (
    <Box
      bgColor={"#F5F5F5"}
      borderRadius="2rem"
      mt={{base:"1rem",md:"2rem"}}
      mb="4.8rem"
      mx={{base:"auto", lg:"2rem"}}
      pl={{ base: "1.5rem", md: "3.8rem" }}
      pt={{base:"1.5rem",md:"2.5rem"}}
      pr={{ base: "1.5rem", lg: "4rem" }}
      pb={{base:"5rem",md:"6.3rem"}}
      float={{ base: "none", lg: "right" }}
      width={{ base: "95%", lg: "68%" }}
      fontFamily="poppins"
    >
      {children}
    </Box>
  );
};

export default Wrapper;
