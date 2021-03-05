import {User} from './user.model';

export class Assignement {

  id: string;
  description: string;
  des: string;
  groupe: string;
  user: string;


  constructor(id: string, title: string, des: string, groupe: string, user: string) {
    this.id = id;
    this.description = title;
    this.des = des;
    this.groupe = groupe;
    this.user = user;
  }
}
