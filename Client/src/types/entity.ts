export interface IEntity {
  Id: number;
  Name: string;
}

export interface ICategory {
  Id: number;
  Name: string;
}

export interface IProduct {
  Id: number;
  Name: string;
  CategoryId: number;
}