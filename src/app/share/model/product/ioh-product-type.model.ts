import {classToPlain, deserialize, Expose, serialize} from 'class-transformer';
import {IohImage} from "../image/ioh-image";

export class IohProductTypeModel {
  @Expose({name: 'product_type_id'})
  productTypeId?: string;

  @Expose({name: 'product_type_name'})
  productTypeName?: string;

  @Expose({name: 'description'})
  description?: string;

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
