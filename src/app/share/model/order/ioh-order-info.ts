import {classToPlain, deserialize, Expose, serialize, Type} from 'class-transformer';
import {IohProductOrder} from "./ioh-product-order";

export class IohOrderInfo {
  @Expose({name: 'id'})
  id: number;

  @Expose({name: 'user_id'})
  userId: number;

  @Expose({name: 'status'})
  status: string;

  @Expose({name: 'message'})
  message: string;

  @Expose({name: 'total'})
  total: number;

  @Expose({name: 'created_at'})
  @Type(() => Date)
  createdAt: string;

  @Expose({name: 'updated_at'})
  @Type(() => Date)
  updatedAt: string;

  @Expose({name: 'order_detail'})
  @Type(() => IohProductOrder)
  orderDetail: IohProductOrder[];

  static fromJson(iohProductdto: any): IohOrderInfo {
    return deserialize(IohOrderInfo, iohProductdto);
  }

  serialize(): string {
    return serialize(this);
  }

  toPlain(): any {
    return classToPlain(this);
  }
}
