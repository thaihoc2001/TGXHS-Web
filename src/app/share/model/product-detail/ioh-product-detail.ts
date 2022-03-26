import {classToPlain, deserialize, Expose, serialize, Type} from 'class-transformer';
import {IohImage} from "../image/ioh-image";

export class IohProductDetail {
  @Expose({name: 'id'})
  productDetailId: number;

  @Expose({name: 'product_id'})
  productId: number;

  @Expose({name: 'brake'})
  brake: string;

  @Expose({name: 'rim'})
  rim: string;

  @Expose({name: 'battery'})
  battery: string;

  @Expose({name: 'capacity'})
  capacity: string;

  @Expose({name: 'power'})
  power: string;

  @Expose({name: 'dimension'})
  dimension: string;

  @Expose({name: 'range'})
  range: string;

  @Expose({name: 'charging'})
  charging: string;

  @Expose({name: 'weight'})
  weight: string;

  static fromJson(iohProductDetaildto: any): IohProductDetail {
    return deserialize(IohProductDetail, iohProductDetaildto);
  }

  serialize(): string {
    return serialize(this);
  }

  toPlain(): any {
    return classToPlain(this);
  }
}
