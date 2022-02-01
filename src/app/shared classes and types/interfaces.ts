export interface IProduct {
  ID: number;
  Name: string;
  Quantity: number;
  Price: number;
  img: string;
}

export interface ICategory {
  ID: number;
  Name: string;
}

export enum DiscountOffers {
  Discount = 'No Discount',
  salle1 = '10%',
  sale2 = '15%',
}
var DiscountOffers1 = DiscountOffers.Discount;
var obj: ICategory = { ID: 2, Name: 'Heba' };
