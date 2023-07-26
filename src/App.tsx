import { useEffect, useState } from "react";
import { Seasons } from "./Seasons";
import { ApiResponse, Championship, Season, Ranking } from "./types";
import {
  Backdrop,
  CssBaseline,
  ThemeProvider,
  CircularProgress,
  styled,
} from "@mui/material";
import { api } from "./api";
import { theme } from "./theme";
import { Hero } from "./Hero";
import { Rankings } from "./Rankings";

const App = () => {
  const [seasons, setSeasons] = useState<Season[]>([]);
  const [championship, setChampionship] = useState<Championship>("drivers");
  const [season, setSeason] = useState<Season>();
  const [ranking, setRanking] = useState<Ranking[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if (isLoading || !!seasons.length) {
      return;
    }

    const fetchSeasons = async () => {
      setIsLoading(true);
      const result = await api.get<ApiResponse<Season[]>>("seasons");

      if (result.data.response) {
        setSeasons(result.data.response);
      }
    };

    fetchSeasons();
  }, [isLoading, seasons]);

  useEffect(() => {
    const fetchRanking = async () => {
      setIsUpdating(true);
      const result = await api.get<ApiResponse<Ranking[]>>(
        `rankings/${championship}`,
        {
          params: {
            season,
          },
        }
      );

      if (result.data.response) {
        setRanking(result.data.response);
      }
    };

    if (season) {
      fetchRanking();
    }
  }, [championship, season]);

  useEffect(() => {
    if (ranking.length) {
      setIsUpdating(false);
    }
  }, [ranking]);

  useEffect(() => {
    if (seasons.length) {
      setIsLoading(false);
    }
  }, [seasons]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Hero />
      {isLoading && (
        <Backdrop open={isLoading}>
          <CircularProgress />
        </Backdrop>
      )}

      <Content>
        {!!seasons.length && (
          <Seasons season={season} handleClick={setSeason} seasons={seasons} />
        )}

        {!!season && (
          <Rankings
            championship={championship}
            handleToggle={setChampionship}
            isLoading={isUpdating}
            ranking={ranking}
          />
        )}
      </Content>
    </ThemeProvider>
  );
};

export default App;

const Content = styled("div")({
  padding: "89px 0 ",
});
