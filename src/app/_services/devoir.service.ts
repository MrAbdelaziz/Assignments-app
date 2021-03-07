import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Assignement} from '../models/assignement.model';
import {Devoire} from '../models/devoire.model';

@Injectable({
  providedIn: 'root'
})
export class DevoirService {

  constructor(private http: HttpClient) { }
  url = 'http://assignement-mr-buffa-server.herokuapp.com/api/devoires';

  getDevoirsPagine(nextPage: number = 1, limit: number = 10, id: number, userid: number, isAdmin: boolean): Observable<any> {
    let urlPagination: string;
    if (isAdmin){
     urlPagination = this.url + `?page=${nextPage}&limit=${limit}&assignment=${id}`;
    }else {
       urlPagination = this.url + `?page=${nextPage}&limit=${limit}&assignment=${id}&user=${userid}`;
    }
    console.log('Requête paginée envoyée : ' + urlPagination);
    return this.http.get<any>(urlPagination);
  }

  addDevoir(newDevoir: Devoire): any {
    return this.http.post(this.url, newDevoir);
  }

/*  addAssignment(newAssignment: Assignement): any {
    return this.http.post(this.url, newAssignment);
  }

  getAssignment(id: number): any{
    return this.http.get<any>(this.url + '/' + id);
  }*/

  getDevoir(id: number): any{
    return this.http.get(this.url + `/${id}`);

  }

  updateDevoir(devoir: any): any {
    const  id = devoir._id;
    delete devoir.created_at;
    delete devoir._id;
    delete devoir.__v;
    return this.http.put(this.url + `/${id}`, devoir);
  }

  deleteDevoir(id: number):any {
    return this.http.delete(this.url + `/${id}`);

  }
}
