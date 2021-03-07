import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Assignement} from '../models/assignement.model';

@Injectable({
  providedIn: 'root'
})
export class AssignementService {

  constructor(private http: HttpClient) { }
  url = 'http://assignement-mr-buffa-server.herokuapp.com/api/assignements';

  getAssignmentsPagine(nextPage: number = 1, limit: number = 10, group: string): Observable<any> {
    const urlPagination = this.url + `?page=${nextPage}&limit=${limit}&groupe=${group}`;
    console.log('Requête paginée envoyée : ' + urlPagination);
    return this.http.get<any>(urlPagination);
  }

  addAssignment(newAssignment: Assignement): any {
    return this.http.post(this.url, newAssignment);
  }

  getAssignment(id: number): any{
    return this.http.get<any>(this.url + '/' + id);
  }

  deleteDevoir(id: number): any{
    return this.http.delete<any>(this.url + '/' + id);
  }

  updateAssignement(assignement: any): any{
    const  id = assignement._id;
    delete assignement.created_at;
    delete assignement._id;
    delete assignement.__v;
    return this.http.put(this.url + `/${id}`, assignement);
  }
}
