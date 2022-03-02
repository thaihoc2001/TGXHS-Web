import {classToPlain, deserialize, Expose, serialize, Type} from 'class-transformer';

export class IohProductCategoryModel {
  @Expose({name: 'id'})
  productCategoryId: number;

  @Expose({name: 'name'})
  productCategoryName: string;

  @Expose({name: 'description'})
  description?: string;

  @Expose({name: 'status'})
  status?: string;

  @Expose({name: 'created_at'})
  @Type(() => Date)
  createAt?: String;

  @Expose({name: 'updated_at'})
  @Type(() => Date)
  updateAt?: String;

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
