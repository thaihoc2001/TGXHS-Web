import {classToPlain, deserialize, Expose, serialize, Type} from 'class-transformer';
import {IohImage} from "../image/ioh-image";
import {IohProductCategoryModel} from "../categories/ioh-product-category.model";

export class IohTypeCategoriesProduct {
  @Expose({name: 'id'})
  productTypeId: number;

  @Expose({name: 'name'})
  productTypeName: string;

  @Expose({name: 'categories'})
  @Type(() => IohProductCategoryModel)
  categories: IohProductCategoryModel[];

  static fromJson(gender: any): IohTypeCategoriesProduct {
    return deserialize(IohTypeCategoriesProduct, gender);
  }

  serialize(): string {
    return serialize(this);
  }

  toPlain(): any {
    return classToPlain(this);
  }
}
