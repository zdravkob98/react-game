// import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
// import NavBar from "./components/NavBar";
// import GameGrid from "./components/GameGrid";
// import GenreList from "./components/GenreList";
// import { useState } from "react";
// import PlatformSelector from "./components/PlatformSelector";
// import SortSelector from "./components/SortSelector";
// import GameHeading from "./components/GameHeading";

// function App() {
//   return (
//     <>
//       {/* <Grid
//         templateAreas={{
//           base: `"nav" "main"`,
//           lg: `"nav nav" "aside main"`,
//         }} */}
//       <Grid
//         templateAreas={{
//           base: `"main"`,
//           lg: `"aside main"`,
//         }}
//         templateColumns={{
//           base: "1fr",
//           lg: "200px 1fr",
//         }}
//       >
//         <Show above="lg">
//           <GridItem area="aside" paddingX={5}>
//             <GenreList />
//           </GridItem>
//         </Show>
//         <GridItem area="main">
//           <Box paddingLeft={10}>
//             <GameHeading />
//             <Flex>
//               <Box marginRight={5}>
//                 <PlatformSelector />
//               </Box>
//               <SortSelector />
//             </Flex>
//           </Box>
//           <GameGrid />
//         </GridItem>
//       </Grid>
//     </>
//   );
// }

// export default App;
