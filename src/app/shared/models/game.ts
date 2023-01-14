export interface Attributes {
  type: string;
  id?: string;
  value?: string;
  numvotes?: string;
  name?: string;
  totalvotes?: string;
}

export interface Thing {
  type: string;
  name: string;
  attributes: Attributes;
  elements?: Thing[];
  text?: string;
}

export interface BoardGame {
  id: string;
  name: string;
  thumbnail: string;
  fullImage: string;
  description: string;
  yearPublished: number;
  minPlayers: number;
  maxPlayers: number;
  playingTime: number;
  minAge: number;
  suggestedPlayAge?: number;
  themes: string[];
}
