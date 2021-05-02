export interface Attributes {
  total: string;
  termsofuse: string;
}

export interface Attributes2 {
  type: string;
  id: string;
}

export interface Attributes3 {
  type: string;
  value: string;
}

export interface Element2 {
  type: string;
  name: string;
  attributes: Attributes3;
}

export interface Element {
  type: string;
  name: string;
  attributes: Attributes2;
  elements: Element2[];
}

export interface Game {
  type: string;
  name: string;
  attributes: Attributes;
  elements: Element[];
}
