export class UserRequest {
  username: string;
  password: string;

  constructor(username: string, password: string){
    this.username = username;
    this.password = password;
  }
}
