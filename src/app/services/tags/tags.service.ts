import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Tag } from 'src/app/models/tag/tag.model';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private http: HttpClient) { }



  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>('http://localhost:8082/api/expertos');
  }
}
