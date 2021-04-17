import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expert } from 'src/app/models/expert/expert.model';

@Injectable({
  providedIn: 'root'
})
export class ExpertsService {

  constructor(private http: HttpClient) { }



  getAllExperts(): Observable<Expert[]> {
    return this.http.get<Expert[]>('http://localhost:8082/api/expertos');
  }

}
