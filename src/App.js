import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import Settings from "./pages/Settings";
import NavBar from "./components/navbar/NavBar";
import { useState } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import frog from "../src/themes/frog";
import theme from "../src/themes/theme";
import cat from "../src/themes/cat";
import FroggyFridge from "./pages/FroggyFridge";
import Notepad from "./pages/Notepad";

function App() {
  const colorThemes = [frog, cat];

  const [activeColorTheme, activateColorTheme] = useState(frog);
  // Merge the active color theme's colors into our base theme:
  const mergedTheme = extendTheme(theme, { colors: activeColorTheme.colors });

  return (
    <ChakraProvider theme={mergedTheme}>
      <NavBar
        colorThemes={colorThemes}
        activateColorTheme={activateColorTheme}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="settings"
          element={
            <Settings
              colorThemes={colorThemes}
              activateColorTheme={activateColorTheme}
            />
          }
        />
        <Route path="froggy-fridge" element={<FroggyFridge />} />
        <Route path="notepad" element={<Notepad />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
