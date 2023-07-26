import React from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { TeamRanking } from "./types";
import { styled } from "@mui/material";

type Props = {
  teams: TeamRanking[];
};

export const TeamTable = ({ teams }: Props) => {
  const rows: GridRowsProp = teams.map(({ points, position, team }, index) => ({
    id: index,
    position,
    teamName: team.name,
    logo: team.logo,
    points,
  }));

  const columns: GridColDef[] = [
    { field: "position", headerName: "Position", flex: 1 },
    { field: "teamName", headerName: "Name", flex: 1 },
    {
      field: "logo",
      headerName: "Logo",
      width: 150,
      renderCell: (params) => <Image alt="" src={params.value} />,
      flex: 1,
    },
    { field: "points", headerName: "Points", flex: 1 },
  ];

  return <DataGrid rows={rows} columns={columns} />;
};

const Image = styled("img")({
  height: "100%",
  objectFit: "contain",
  width: "auto",
});
