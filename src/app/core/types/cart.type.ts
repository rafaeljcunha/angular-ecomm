export type Cart = {
  id?: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  addedAt?: Date;
};

export enum CartEvents {
  UPDATE_QUANTITY = 'update_quantity',
}
