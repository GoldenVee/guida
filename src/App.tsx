import * as React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import theme from "../src/themes/theme";
import frog from "../src/themes/frog";
import cat from "../src/themes/cat";

export const App = () => {
  const colorThemes = [frog, cat];

  const [activeColorTheme, activateColorTheme] = React.useState(frog);
  // Merge the active color theme's colors into our base theme:
  const mergedTheme = extendTheme(theme, { colors: activeColorTheme.colors });
  return (
    <ChakraProvider theme={mergedTheme}>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              colorThemes={colorThemes}
              activateColorTheme={activateColorTheme}
            />
          }
        />
      </Routes>
    </ChakraProvider>
  );
};
