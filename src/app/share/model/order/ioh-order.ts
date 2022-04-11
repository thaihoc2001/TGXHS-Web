import {classToPlain, deserialize, Expose, serialize, Type} from 'class-transformer';
import {IohOrderInfo} from "./ioh-order-info";
import {IohProductOrder} from "./ioh-product-order";

export class IohOrder {
  @Expose({name: 'id'})
  id: number;

  @Expose({name: 'first_name'})
  firstName: string;

  @Expose({name: 'last_name'})
  lastName: string;

  @Expose({name: 'phone'})
  phone: string;

  @Expose({name: 'address'})
  address: string;

  @Expose({name: 'message'})
  message: string;

  @Expose({name: 'total'})
  total: number;

  @Expose({name: 'orders'})
  @Type(() => IohOrderInfo)
  orders: IohOrder;

  @Expose({name: 'list_product'})
  @Type(() => IohProductOrder)
  listProduct: IohProductOrder[];

  static fromJson(iohProductdto: any): IohOrder {
    return deserialize(IohOrder, iohProductdto);
  }

  serialize(): string {
    return serialize(this);
  }

  toPlain(): any {
    return classToPlain(this);
  }
}
