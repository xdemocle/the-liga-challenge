export type Player = {
  id: number;
  name: string;
  position: string;
  dateOfBirth: string;
  nationality: string;
};

export type Team = {
  id: number;
  name: string;
  crest: string;
  squad: Player[];
};
