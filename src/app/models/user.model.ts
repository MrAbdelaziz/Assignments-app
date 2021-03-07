export class User {

  id: string;
  name: string;
  username: string;
  email: string;
  role: string;
  groupe: string;
  matiere: string;


  constructor(id: string, name: string, username: string, email: string,
              role: string, groupe: string, matiere: string) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.role = role;
    this.groupe = groupe;
    this.matiere = matiere;
  }
}
