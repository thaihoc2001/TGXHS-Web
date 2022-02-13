import {classToPlain, deserialize, Expose, serialize, Type} from 'class-transformer';
import {IohImage} from "../image/ioh-image";

export class IohProduct {
  @Expose({name: 'product_id'})
  productId: string;

  @Expose({name: 'product_name'})
  productName: string;

  @Expose({name: 'price_value'})
  priceValue: number;

  @Expose({name: 'discount'})
  discount: number;

  @Expose({name: 'description'})
  description: string;

  @Expose({name: 'start_date'})
  startDate: string;

  @Expose({name: 'list_promotion_id'})
  listPromotionId: string[];

  @Expose({name: 'product_category_id'})
  productCategoryId: string;

  @Expose({name: 'product_type_id'})
  productTypeId: string;

  @Expose({name: 'image_thumbnail'})
  // @Type(() => IohImage)
  imageThumbnail: IohImage;

  @Expose({name: 'images'})
  // @Type(() => IohImage)
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
