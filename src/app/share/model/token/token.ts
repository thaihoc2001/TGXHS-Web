import {classToPlain, deserialize, Expose, serialize} from 'class-transformer';

export class Token {
  @Expose({name: 'accessToken'})
  accessToken: String;

  @Expose({name: 'accessToken'})
  refreshToken: String;

  static fromJson(iohToken: any): Token {
    return deserialize(Token, iohToken);
  }

  serialize(): string {
    return serialize(this);
  }

  toPlain(): any {
    return classToPlain(this);
  }
}
