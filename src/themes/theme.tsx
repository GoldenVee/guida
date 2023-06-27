import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

import frog from "./frog";
import cat from "./cat";

const theme = {
  config: {
    initialColorMode: "system", // see https://chakra-ui.com/docs/styled-system/color-mode
    useSystemColorMode: true,
  },
  colors: frog.colors,
  // We define a semanticTokens.colors object where we name our tokens and point our colors
  semanticTokens: {
    colors: {
      headerBg: {
        default: "primary.600",
        _dark: "primary.800",
      },
      sidebarBg: {
        default: "primary.500",
        _dark: "primary.700",
      },
      mainBg: {
        default: "white",
        _dark: "secondary.900",
      },
      sidebar2Bg: {
        default: "secondary.50",
        _dark: "secondary.800",
      },
    },
  },
};

export default extendTheme(
  // This will set the default colorScheme for all buttons as `action`
  withDefaultColorScheme({ colorScheme: "action", components: ["Button"] }),
  theme
);
