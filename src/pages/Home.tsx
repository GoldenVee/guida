import * as React from "react";
import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  VStack,
  extendTheme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

export const Home = ({ colorThemes, activateColorTheme }) => {
  return (
    <Box>
      <Box
        bg={"headerBg"}
        height="48px"
        mb="8px"
        w="100vw"
        sx={{ position: "sticky", top: "0" }}
      >
        <ColorModeSwitcher justifySelf="flex-end" />
        <Popover>
          <PopoverTrigger>
            <Button size="sm">Change Theme</Button>
          </PopoverTrigger>
          <PopoverContent w="150px">
            <PopoverArrow />
            <PopoverBody>
              <VStack>
                {/* Map over each colorTheme and add a button to activate it */}
                {colorThemes.map((colorTheme) => (
                  <Button
                    variant="link"
                    key={colorTheme.id}
                    onClick={() => activateColorTheme(colorTheme)}
                  >
                    {colorTheme.name}
                  </Button>
                ))}
              </VStack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
      <Grid
        h="98vh"
        templateRows="repeat(2, 1fr)"
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(5, 1fr)"]}
        gap={4}
        mr="16px"
      >
        <GridItem
          rowSpan={2}
          colSpan={1}
          bg={"sidebarBg"}
          h={["0px", "0px", "98vh"]}
          w={["0px", "0px", "auto"]}
        />
        <GridItem
          colSpan={4}
          bg={"mainBg"}
          h="98vh"
          w={["100%", "auto", "auto"]}
        />
      </Grid>
    </Box>
  );
};
