import React from "react";
import background from "./images/hero.png";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { styled } from "@mui/system";

export const Hero = () => {
  return (
    <Wrapper>
      <StyledContainer>
        <Heading variant="h1">Formula 1 Rankings</Heading>
        <Circles>
          <Circle />
          <RedCircle />
        </Circles>
      </StyledContainer>
    </Wrapper>
  );
};

const Circles = styled("div")({
  overflow: "hidden",
  flexGrow: "1",
  position: "relative",
});

const Circle = styled("div")(({ theme }) => ({
  borderColor: `${theme.palette.primary.light}`,
  borderRadius: "50%",
  borderWidth: "10px",
  borderStyle: "solid",
  height: "907px",
  position: "absolute",
  top: 0,
  bottom: 0,
  margin: "auto 0",
  width: "907px",
}));

const RedCircle = styled(Circle)(({ theme }) => ({
  borderColor: `${theme.palette.secondary.main}`,
  left: "135px",
}));

const Heading = styled(Typography)({
  color: "white",
  fontSize: "116px",
  fontWeight: 600,
  lineHeight: "110%",
  margin: "122px 0 133px",
  maxWidth: "628px",
  textTransform: "capitalize",
});

const StyledContainer = styled(Container)({
  display: "flex",
});

const Wrapper = styled("div")({
  background: `#2D2D2D url(${background}) top right no-repeat`,
  display: "flex",
  flexWrap: "nowrap",
  height: "511px",
});
