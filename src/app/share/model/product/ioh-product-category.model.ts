import {classToPlain, deserialize, Expose, serialize} from 'class-transformer';

export class IohProductCategoryModel {
  @Expose({name: 'products_category_id'})
  productCategoryId?: string;

  @Expose({name: 'product_category_name'})
  productCategoryName?: string;

  @Expose({name: 'description'})
  description?: string;

  @Expose({name: 'product_type_id'})
  productTypeId?: string;

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
