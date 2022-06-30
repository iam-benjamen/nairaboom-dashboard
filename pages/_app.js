import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Layout from "../components/layout";

const colors = {
  nairagreen: "#1ED760",
  nairablue: "#002047",
  currentlink: "rgba(0, 32, 71, 0.05)",
};

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "1024px",
};

const theme = extendTheme({ colors, breakpoints });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
