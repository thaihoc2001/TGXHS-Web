import {classToPlain, deserialize, Expose, serialize, Type} from 'class-transformer';
import {IohImage} from "../image/ioh-image";
import { IohProduct } from '../product/ioh-product';

export class IohProductTypeModel {
  @Expose({name: 'id'})
  productTypeId: number;

  @Expose({name: 'name'})
  productTypeName: string;

  @Expose({name: 'status'})
  status: string;

  @Expose({name: 'description'})
  description: string;

  @Expose({name: 'created_at'})
  @Type(() => Date)
  createAt: String;

  @Expose({name: 'updated_at'})
  @Type(() => Date)
  updateAt: String;

  @Expose({name: 'list_product'})
  @Type(() => IohProduct)
  listProduct: IohProduct[];

  static fromJson(gender: any): IohProductTypeModel {
    return deserialize(IohProductTypeModel, gender);
  }

  serialize(): string {
    return serialize(this);
  }

  toPlain(): any {
    return classToPlain(this);
  }
}
