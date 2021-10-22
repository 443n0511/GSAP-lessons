import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fetchImages } from "./api/api";
import Fonts from "./theme/font";
import { theme } from "./theme/theme";
import { Contents } from "./components/Contents";
import { Loading } from "./components/Loading";

function App() {
  const [urls, setUrls] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    fetchImages("shiba", 4).then((urls) => {
      setUrls(urls);
      setTimeout(() => setIsloading(false), 1000);
    });
  }, []);
  if (isLoading)
    return (
      <ChakraProvider theme={theme}>
        <Fonts />
        <Loading />
      </ChakraProvider>
    );
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Contents urls={urls} />
    </ChakraProvider>
  );
}

export default App;
