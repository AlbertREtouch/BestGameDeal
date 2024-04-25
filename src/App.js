import "./App.css";
import React, { useEffect, useState } from "react";
import { Container, Grid, Box } from "@mui/material";
import { fetchGames, fetchGameDetails } from "./api/cheapSharkApi";
import GameDetail from "./components/game-details";
import GameCard from "./components/game-card";
import SearchBar from "./components/search-bar";
import TitleBar from "./components/title-bar";

function App() {
  const [games, setGames] = useState([]);
  const [selectedGameDetail, setSelectedGameDetail] = useState(null);

  const handleGameSelect = async (gameID) => {
    const details = await fetchGameDetails(gameID);
    setSelectedGameDetail(details);
    console.log(details);
  };

  const handleSearch = async (title) => {
    const games = await fetchGames(title);
    setGames(games);
  };

  useEffect(() => {
    const searchForGame = async () => {
      const gameResults = await fetchGames("batman");
      setGames(gameResults);
    };

    searchForGame();
  }, []);

  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: "sticky", top: 0, zIndex: 10, padding: "5px" }}>
        <TitleBar />
        <SearchBar onSearch={handleSearch} />
      </Box>
      <Grid container spacing={2}>
      <Grid
          item
          xs={12}
          md={4}
          style={{ maxHeight: "calc(100vh - 100px)", overflowY: "auto" }}
        >
          <Box sx={{ position: "sticky", top: 0 }}>
            {selectedGameDetail && <GameDetail detail={selectedGameDetail} />}
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          style={{ maxHeight: "calc(100vh - 100px)", overflowY: "auto" , padding: "5px",marginTop:"25px"}}
        >
          <Grid container spacing={2}>
            {games.map((game) => (
              <Grid item key={game.gameID} xs={12} sm={6} md={4} lg={3}>
                <GameCard game={game} onSelect={handleGameSelect} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        
      </Grid>
    </Container>
  );
}

export default App;
