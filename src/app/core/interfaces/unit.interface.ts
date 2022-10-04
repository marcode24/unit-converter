export interface IProperty {
  name: string;
  image: string;
  units: IUnit[];
}

export interface IUnit {
  name: string;
  factor: number;
}

export interface IConvert {
  propName: string;
  indexFrom: number;
  indexTo: number;
  quantity: number;
}
