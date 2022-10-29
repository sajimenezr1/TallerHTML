import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Serie } from './serie';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  apiUrl = environment.baseUrl + 'series.json';
  constructor(private http: HttpClient) { }
  getSeries(): Observable<Serie[]>{
    return this.http.get<Serie[]>(this.apiUrl);
  }

}
