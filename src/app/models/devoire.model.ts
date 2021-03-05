import {Assignement} from './assignement.model';
import {User} from './user.model';

export class Devoire {

  id: string;
  title: string;
  remarques: string;
  status: string;
  note: number;
  assignment: Assignement;
  user: string;


  constructor(id: string, title: string, remarques: string,
              status: string, note: number, assignment: Assignement, user: string) {
    this.id = id;
    this.title = title;
    this.remarques = remarques;
    this.status = status;
    this.note = note;
    this.assignment = assignment;
    this.user = user;
  }
}
