export interface Attributes {
  type: string;
  id?: string;
  value?: string;
}

export interface Thing {
  type: string;
  name: string;
  attributes: Attributes;
  elements?: Thing[];
  text?: string;
}
