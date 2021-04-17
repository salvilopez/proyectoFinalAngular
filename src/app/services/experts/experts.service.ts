import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpertRequest } from 'src/app/models/expert/expert-request.model';
import { Expert } from 'src/app/models/expert/expert.model';

@Injectable({
  providedIn: 'root'
})
export class ExpertsService {

  constructor(private http: HttpClient) { }



  getAllExperts(expertRequest:ExpertRequest): Observable<Expert[]> {

     if (expertRequest.estado!=undefined)
         return this.http.get<Expert[]>('http://localhost:8082/api/expertos?nombre='+expertRequest.nombre+"&pagina="+expertRequest.pagina+"&limite="+expertRequest.limite);

     if (expertRequest.pagina!=undefined)
         return this.http.get<Expert[]>('http://localhost:8082/api/expertos?modalidad='+expertRequest.modalidad+"&pagina="+expertRequest.pagina+"&limite="+expertRequest.limite);

     if (expertRequest.estado!=undefined)
          return this.http.get<Expert[]>('http://localhost:8082/api/expertos?estado='+expertRequest.estado+"&pagina="+expertRequest.pagina+"&limite="+expertRequest.limite);

   //  if (expertRequest.estado!=undefined)
   //      return this.http.get<Expert[]>('http://localhost:8082/api/expertos?estado='+expertRequest.etiqueta+"&pagina="+expertRequest.pagina+"&limite="+expertRequest.limite);
  //  if (expertRequest.estado!=undefined)
   //      return this.http.get<Expert[]>('http://localhost:8082/api/expertos?id='+expertRequest.id);
          return this.http.get<Expert[]>('http://localhost:8082/api/expertos&pagina='+expertRequest.pagina+"&limite="+expertRequest.limite);
  }

}
