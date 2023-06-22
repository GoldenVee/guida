import {
  Box,
  Button,
  Divider,
  Heading,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  VStack,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

const Settings = ({ colorThemes, activateColorTheme }) => {
  return (
    <Box
      h="100vh"
      w="90%"
      p="32px"
      bg="mainBg"
      m="16px"
      borderWidth="1px"
      borderColor="sidebarBg"
      borderRadius="lg"
      display="flex"
      justifySelf="center"
    >
      <VStack
        minWidth="100%"
        height="min-content"
        alignItems="center"
        justifyContent="space-around"
        gap="2"
      >
        <Heading as="h2" size="md">
          Settings
        </Heading>
        <Divider my="8px" />
        <ColorModeSwitcher my="8px" />
        <Popover>
          <PopoverTrigger>
            <Button size="sm" my="8px">
              Change Theme
            </Button>
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
      </VStack>
    </Box>
  );
};

export default Settings;
