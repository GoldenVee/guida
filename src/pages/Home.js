import { Grid, GridItem } from "@chakra-ui/react";
import SideBar from "../components/sidebar/SideBar";

const Home = () => {
  return (
    <Grid>
      <GridItem>
        <SideBar />
      </GridItem>
    </Grid>
  );
};

export default Home;
