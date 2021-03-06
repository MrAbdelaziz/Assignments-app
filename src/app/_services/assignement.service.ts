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

  getAssignmentsPagine(nextPage: number = 1, limit: number = 10): Observable<any> {
    const urlPagination = this.url + `?page=${nextPage}&limit=${limit}`;
    console.log('Requête paginée envoyée : ' + urlPagination);
    return this.http.get<any>(urlPagination);
  }
}
