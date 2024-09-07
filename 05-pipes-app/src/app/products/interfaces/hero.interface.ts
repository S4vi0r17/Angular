export enum Color {
  Red,
  Black,
  Blue,
  Green,
  Yellow,
}

export interface Hero {
  name: string;
  canFly: boolean;
  color: Color;
}
