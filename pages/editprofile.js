import {
  Box,
  Text,
  Avatar,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import avatar from "../public/edit-profile/avatar.png";
import { useDisclosure } from "@chakra-ui/react";
import Wrapper from "../components/Wrapper";

const EditProfile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Wrapper>
      <Text
        fontWeight={700}
        fontSize={{ base: "1.25rem", md: "1.5rem" }}
        pb={{ base: "3rem", md: "6rem" }}
      >
        Edit Profile
      </Text>
      <Box
        display={"flex"}
        flexDir="column"
        pl={{ base: "2rem", md: "7rem" }}
        maxW="90%"
      >
        <Box gap="2.125rem" display={"flex"} alignItems="center">
          <Avatar
            src={avatar.src}
            name="Muhammed Cynthia"
            bg="rgba(30, 215, 96, 0.19)"
            size={{ base: "2xl", md: "14rem" }}
          />
          <Text
            fontWeight={500}
            fontSize={{ base: "1rem", md: "xl" }}
            w="max-content"
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

        <Box w={{ base: "100%", md: "90%" }}>
          <Box
            display={"flex"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Text fontWeight={500} color="nairagrey" fontSize={"1rem"}>
              Full Name
            </Text>
            <Text
              fontWeight={500}
              color="nairagrey"
              fontSize={{ base: "1rem", md: "1.2rem" }}
            >
              Muhammed Cynthia
            </Text>
          </Box>
          <Box h="4px" mt=".8rem" bgColor="white" borderRadius={"4px"}></Box>
        </Box>

        <Box w={{ base: "100%", md: "90%" }} pt="2.35rem">
          <Box
            display={"flex"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Text fontWeight={500} color="nairagrey" fontSize={"1rem"}>
              Phone Number
            </Text>
            <Text
              fontWeight={500}
              color="nairagrey"
              fontSize={{ base: "1rem", md: "1.2rem" }}
            >
              +234-8094647438
            </Text>
          </Box>
          <Box h="4px" mt=".8rem" bgColor="white" borderRadius={"4px"}></Box>
        </Box>

        <Box w={{ base: "100%", md: "90%" }} pt="2.35rem">
          <Box
            display={"flex"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Text fontWeight={500} color="nairagrey" fontSize={"1rem"}>
              Email
            </Text>
            <Text
              fontWeight={500}
              color="nairagrey"
              fontSize={{ base: "1rem", md: "1.2rem" }}
              maxW={{ base: "13rem", md: "fit-content" }}
              wordBreak="break-all"
            >
              Muhammedcynthia@gmail.com
            </Text>
          </Box>
        </Box>
        <Button
          color="white"
          bgGradient="linear(180deg, #02D95A 0%, #02B54C 100%)"
          mt={{ base: "5rem", md: "6.825rem" }}
          w="26.8rem"
          maxW={"90%"}
          h="3rem"
          alignSelf={"flex-start"}
          onClick={onOpen}
          focusBorderColor="nairagreen"
          _hover={{}}
        >
          Edit Profile
        </Button>
        <Modal
          motionPreset="slideInBottom"
          isOpen={isOpen}
          onClose={onClose}
          size="xl"
        >
          <ModalOverlay />
          <ModalContent
            borderRadius={"1.8rem"}
            pt="3.37rem"
            pb="3.8rem"
            h="max-content"
            w={{ base: "90%", md: "60%" }}
          >
            <ModalCloseButton
              mt="3.37rem"
              mr={{ base: ".5rem", md: "3.5rem" }}
              colorScheme={"red"}
            />
            <ModalBody>
              <Box
                display={"flex"}
                flexDir="column"
                alignItems={"center"}
                justifyContent="center"
                fontFamily={"poppins"}
              >
                <Text
                  alignSelf={"flex-start"}
                  ml={{ base: "2erem", md: "6rem" }}
                  pb="4rem"
                  fontWeight={700}
                  fontSize={{ base: "1rem", md: "1.5rem" }}
                >
                  Edit Profile
                </Text>
                <form action="">
                  <Box
                    alignItems={"center"}
                    w={{ base: "max-content", md: "21rem" }}
                    gap="2.3rem"
                    display={"flex"}
                    flexDir="column"
                    margin={"auto"}
                  >
                    <Box w="100%">
                      <label htmlFor="name">
                        <Text
                          color="nairagrey"
                          fontWeight={500}
                          fontSize=".9rem"
                        >
                          Full Name
                        </Text>{" "}
                      </label>
                      <Input
                        _placeholder={{
                          fontSize: "13px",
                          fontWeight: 500,
                          color: "niaragrey",
                        }}
                        h="4rem"
                        border={"none"}
                        bgColor={"#F5F5F5"}
                        type="text"
                        placeholder="Muhammed Cynthia"
                        focusBorderColor="nairagreen"
                      />
                    </Box>
                    <Box w="100%">
                      <label htmlFor="name">
                        <Text
                          color="nairagrey"
                          fontWeight={500}
                          fontSize=".9rem"
                        >
                          Phone Number
                        </Text>{" "}
                      </label>
                      <Input
                        _placeholder={{ fontSize: "13px", fontWeight: 500 }}
                        h="4rem"
                        border="none"
                        bgColor={"#F5F5F5"}
                        type="number"
                        placeholder="+234-8094647438"
                        focusBorderColor="nairagreen"
                      />
                    </Box>
                  </Box>
                  <Button
                    color="white"
                    bgGradient="linear(180deg, #02D95A 0%, #02B54C 100%)"
                    w={{ base: "90%", md: "25rem" }}
                    type="submit"
                    mt="4rem"
                    _hover={{}}
                  >
                    Update
                  </Button>
                </form>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </Wrapper>
  );
};

export default EditProfile;
