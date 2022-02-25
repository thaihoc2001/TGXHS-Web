import {classToPlain, deserialize, Expose, serialize} from 'class-transformer';
import {IohImage} from "../image/ioh-image";

export class IohProductTypeModel {
  @Expose({name: 'id'})
  productTypeId: number;

  @Expose({name: 'name'})
  productTypeName: string;

  @Expose({name: 'status'})
  status: string;

  @Expose({name: 'description'})
  description: string;

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
