import { Box, Button, ButtonGroup, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const items = [
    { name: "Froggy Fridge", link: "froggy-fridge" },
    { name: "Notepad", link: "notepad" },
  ];
  return (
    <Box
      className="sidebar"
      bg="sidebarBg"
      w="25%"
      h="95vh"
      p={4}
      color="white"
    >
      <ButtonGroup>
        <VStack w="35%" align="flex-start" justify="center" spacing={3}>
          {items.map((item) => {
            return (
              <Link to={item.link}>
                <Button bg="headerBg" color="white">
                  {item.name}
                </Button>
              </Link>
            );
          })}
        </VStack>
      </ButtonGroup>
    </Box>
  );
};

export default SideBar;
