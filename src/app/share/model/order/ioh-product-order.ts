import {classToPlain, deserialize, Expose, serialize, Type} from 'class-transformer';

export class IohProductOrder {
  @Expose({name: 'id'})
  id: number;

  @Expose({name: 'product_id'})
  productId: number;

  @Expose({name: 'quantity'})
  quantity: number;


  static fromJson(iohProductdto: any): IohProductOrder {
    return deserialize(IohProductOrder, iohProductdto);
  }

  serialize(): string {
    return serialize(this);
  }

  toPlain(): any {
    return classToPlain(this);
  }
}
