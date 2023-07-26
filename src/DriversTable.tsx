import React from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { DriverRanking } from "./types";
import { styled } from "@mui/material";

type Props = {
  drivers: DriverRanking[];
};

export const DriversTable = ({ drivers }: Props) => {
  const rows: GridRowsProp = drivers.map(
    ({ points, position, driver }, index) => ({
      id: index,
      position,
      driverName: driver.name,
      image: driver.image,
      points,
    })
  );

  const columns: GridColDef[] = [
    { field: "position", headerName: "Position", flex: 1 },
    { field: "driverName", headerName: "Name", flex: 1 },
    {
      field: "image",
      headerName: "Image",
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
