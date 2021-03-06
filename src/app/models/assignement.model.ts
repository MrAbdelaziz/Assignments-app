import {User} from './user.model';

export class Assignement {

  title: string;
  des: string;
  groupe: string;
  user: string;


  constructor( title: string, des: string, groupe: string, user: string) {
    this.title = title;
    this.des = des;
    this.groupe = groupe;
    this.user = user;
  }

}
