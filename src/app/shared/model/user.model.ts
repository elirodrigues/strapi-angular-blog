export class Authenticator {
  identifier : string;
  password : string;
}

export class UserResponse {
  jwt : string;
  user : User;
}

export class User {
  
  confirmed : boolean;
  blocked : boolean;
  _id : string;
  username : string;
  email : string;
  provider: string;
  createdAt: string;
  updatedAt: string;
  __v : number;
  role : {
    _id : string;
    name : string;
    description : string;
    type : string;
    createdAt : string;
    updatedAt : string;
    __v : number;
    id : string;
  }
  id: string;
  
}

