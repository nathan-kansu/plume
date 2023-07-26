import {
  styled,
  Box,
  CircularProgress,
  Container,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";
import React, { memo } from "react";
import { Heading } from "./Heading";
import { Championship, DriverRanking, Ranking, TeamRanking } from "./types";
import { TeamTable } from "./TeamTable";
import { DriversTable } from "./DriversTable";

interface Props {
  championship: Championship;
  handleToggle: (value: Championship) => void;
  isLoading: boolean;
  ranking: Ranking[];
}

const _Rankings = ({
  championship,
  handleToggle,
  isLoading,
  ranking,
}: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const championship = event.target.value as Championship;
    const value = championship === "drivers" ? "teams" : "drivers";
    handleToggle(value);
  };

  function isDriverRanking(ranking: Ranking[]): ranking is DriverRanking[] {
    return (ranking[0] as DriverRanking).driver !== undefined;
  }

  if (isLoading || !ranking.length) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container>
      <StyledBox>
        <Heading variant="h2">Rankings</Heading>
        <FormGroup>
          <StyledFormControlLabel
            control={
              <Switch
                checked={championship === "drivers"}
                color="secondary"
                onChange={handleChange}
                value={championship}
              />
            }
            label={championship}
            labelPlacement="start"
          />
        </FormGroup>
      </StyledBox>

      {isDriverRanking(ranking) ? (
        <DriversTable drivers={ranking as DriverRanking[]} />
      ) : (
        <TeamTable teams={ranking as TeamRanking[]} />
      )}
    </Container>
  );
};

const StyledBox = styled(Box)({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "nowrap",
  marginBottom: "48px",
});

const StyledFormControlLabel = styled(FormControlLabel)({
  textTransform: "capitalize",
});

export const Rankings = memo(_Rankings);
