export interface ApiResponse<T> {
  get: string;
  parameters: Record<string, string>;
  errors: string[];
  results: number;
  response?: T;
}

export type Season = number;

export type Championship = "drivers" | "teams";

export type Driver = {
  id: number;
  name: string;
  abbr: string;
  number: string;
  image: string;
};

export type Team = {
  id: number;
  name: string;
  logo: string;
};

export interface TeamRanking {
  position: number;
  team: Team;
  points: number;
  season: number;
}

export interface DriverRanking extends TeamRanking {
  driver: Driver;
  wins: number;
  behind: number;
}

export type Ranking = TeamRanking | DriverRanking;
