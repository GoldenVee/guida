import { Box, HStack, Heading, IconButton } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Box className="navbar" bg="headerBg" p="8px">
      <HStack justify="space-between">
        <Link to="/">
          <Heading color="white">Guida</Heading>
        </Link>
        <Link to="settings">
          <IconButton
            colorScheme="blue"
            aria-label="Search database"
            icon={<SettingsIcon />}
            justifySelf={"flex-end"}
          />
        </Link>
      </HStack>
    </Box>
  );
};

export default NavBar;
