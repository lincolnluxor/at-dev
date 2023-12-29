export interface StateDef {
  "abbreviation": string;
  "draw": string;
  "name": string;
}
export interface StatesDef {
  "states": StateDef[];
}
export interface ShoeDef {
  "brand": ShoesBrand;
  "title": string;
  "subtitle": string;
  "miles": number;
  "color1": string;
  "color2": string;
  "cost": number;
}
export interface ShoesDef {
  "shoes": ShoeDef[];
}
export enum ShoesBrand {
  ASICS = 'asics',
  NIKE = 'nike',
  NEWBALANCE = 'newBalance',
  SAUCONY = 'saucony',
  ADIDAS = 'adidas',
  HOKA = 'hoka',
}

export interface RunsDef {
  runs: RunDef[];
}

export interface RunDef {
  "hours": number;
  "minutes": number;
  "seconds": number;
  "date": string;
  "miles": number;
}
