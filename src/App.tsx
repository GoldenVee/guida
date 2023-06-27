import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </ChakraProvider>
);
