import {classToPlain, deserialize, Expose, serialize, Type} from 'class-transformer';
import {IohImage} from "../image/ioh-image";

export class IohProduct {
  @Expose({name: 'id'})
  productId: number;

  @Expose({name: 'name'})
  productName: string;

  @Expose({name: 'price_old'})
  priceOld: number;

  @Expose({name: 'price_new'})
  priceNew: number;

  @Expose({name: 'description'})
  description: string;

  @Expose({name: 'created_at'})
  @Type(() => Date)
  createAt: string;

  @Expose({name: 'status'})
  status: string;

  @Expose({name: 'quantity'})
  quantity: string;

  @Expose({name: 'updated_at'})
  @Type(() => Date)
  updatedAt: string;

  @Expose({name: 'category_id'})
  categoryId: number;

  @Expose({name: 'product_type_id'})
  productTypeId: number;

  @Expose({name: 'images'})
  @Type(() => IohImage)
  images: IohImage[];


  static fromJson(iohProductdto: any): IohProduct {
    return deserialize(IohProduct, iohProductdto);
  }

  serialize(): string {
    return serialize(this);
  }

  toPlain(): any {
    return classToPlain(this);
  }
}
