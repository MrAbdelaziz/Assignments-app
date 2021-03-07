import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  constructor(private http: HttpClient) { }
  url = 'https://assignement-mr-buffa-server.herokuapp.com/api/matieres';

  getMatierePagine(nextPage: number = 1, limit: number = 10): Observable<any> {
    const urlPagination = this.url + `?page=${nextPage}&limit=${limit}`;
    console.log('Requête paginée envoyée : ' + urlPagination);
    return this.http.get<any>(urlPagination);
  }
}
