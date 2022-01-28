import {classToPlain, deserialize, Expose, serialize} from 'class-transformer';

export class IohImage {
  @Expose({name: 'Array_Img'})
  Array_Img?: string;

  @Expose({name: 'Array_CloudinaryId'})
  Array_CloudinaryId?: string;


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
