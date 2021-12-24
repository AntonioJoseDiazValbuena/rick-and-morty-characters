export interface Character {
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export interface RequestResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: any;
  };
  results: Character[];
};
