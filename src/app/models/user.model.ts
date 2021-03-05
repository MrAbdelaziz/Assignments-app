import {Matiere} from './matiere.model';

export class User {

  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  avatar: string;
  role: string;
  groupe: string;
  matiere: string;
  token?: string;


  constructor(id: string, name: string, username: string, email: string, password: string,
              avatar: string, role: string, groupe: string, matiere: string) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.avatar = avatar;
    this.role = role;
    this.groupe = groupe;
    this.matiere = matiere;
  }
}
