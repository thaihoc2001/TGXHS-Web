import {classToPlain, deserialize, Expose, serialize} from 'class-transformer';

export class IohProductCategoryModel {
  @Expose({name: 'id'})
  productCategoryId: number;

  @Expose({name: 'name'})
  productCategoryName: string;

  @Expose({name: 'description'})
  description: string;

  @Expose({name: 'status'})
  status: string;

  static fromJson(gender: any): IohProductCategoryModel {
    return deserialize(IohProductCategoryModel, gender);
  }

  serialize(): string {
    return serialize(this);
  }

  toPlain(): any {
    return classToPlain(this);
  }
}
