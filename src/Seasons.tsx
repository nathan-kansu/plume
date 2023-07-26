import { Heading } from "./Heading";
import { memo } from "react";
import { Season } from "./types";
import { Box, Button, Container, styled } from "@mui/material";

interface Props {
  handleClick: (value: number) => void;
  season?: number;
  seasons: Season[];
}

const _Seasons = ({ handleClick, season, seasons }: Props) => {
  const handleChange = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();

    const season = Number(event.currentTarget.value);
    handleClick(season);
  };

  return (
    <StyledContainer>
      <StyledHeading variant="h2">Seasons</StyledHeading>

      <StyledBox>
        {seasons.map((value) => (
          <StyledButton
            key={value}
            className={value === season ? "selected" : undefined}
            onClick={handleChange}
            variant="contained"
            value={value}
          >
            {value}
          </StyledButton>
        ))}
      </StyledBox>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)({
  marginBottom: "90px",
});

const StyledBox = styled(Box)({
  display: "flex",
  flexWrap: "nowrap",
});

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  boxShadow: "none",
  color: theme.palette.primary.main,
  marginRight: "32px",
  "&:last-child": {
    marginRight: "none",
  },
  "&:hover": {
    background: theme.palette.primary.light,
  },
  "&.selected": {
    border: `3px solid ${theme.palette.secondary.main}`,
    boxShadow: "0px 3px 30px 0px rgba(255, 1, 0, 0.20)",
  },
}));

const StyledHeading = styled(Heading)({
  marginBottom: "48px",
});
export const Seasons = memo(_Seasons);
