import {classToPlain, deserialize, Expose, serialize} from 'class-transformer';

export class IohImage {
  @Expose({name: 'id'})
  imageID: number;

  @Expose({name: 'cloudinary_id'})
  arrayCloudinaryId: string;

  @Expose({name: 'url'})
  url: string;

  @Expose({name: 'type'})
  type: string

  @Expose({name: 'product_id'})
  productId: number;

  static fromJson(gender: any): IohImage {
    return deserialize(IohImage, gender);
  }

  serialize(): string {
    return serialize(this);
  }

  toPlain(): any {
    return classToPlain(this);
  }
}
