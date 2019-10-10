export interface IUser {
  avatar?: {};
  id: number;
  iso_639_1?: string;
  iso_3166_1?: string;
  name?: string;
  include_adult?: boolean;
  username: string;
  redirect?: boolean;
}

export class User {
  id: number;
  username: string;
  redirect?: boolean;

  constructor(input?: IUser) {
    if (input) {
      this.id = input.id;
      this.username = input.username;
      this.redirect = input.redirect;
    }
  }
}
