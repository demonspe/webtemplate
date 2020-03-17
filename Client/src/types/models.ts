/** Модель DTO категории. */
export interface ICategory {
  Id: string;
  Name: string;
}

/** Модель DTO товара. */
export interface IProduct {
  Id: string;
  Name: string;
  Category: ICategory;
}