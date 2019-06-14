import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cita } from './cita';
import { map } from 'rxjs/operators';

@Injectable()

export class CitaService{

    private urlEndPoint: string = 'http://localhost:8080/api/citas';

    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

    constructor(private http: HttpClient){}

    getCitas(): Observable<Cita[]> {
        return this.http.get(this.urlEndPoint).pipe(
            map(response=> response as Cita[])
            
        );console.log(Cita);
    }
    getCita(id: any): Observable<Cita>{
        return this.http.get<Cita>(`${this.urlEndPoint}/${id}`)
    }
    create(cita: Cita): Observable<Cita>{
        return this.http.post<Cita>(this.urlEndPoint, cita, {headers: this.httpHeaders})
    }
    delete(id: number): Observable<Cita>{
        return this.http.delete<Cita>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
    }
    update(cita: Cita): Observable<Cita>{
        return this.http.put<Cita>(`${this.urlEndPoint}/${cita.id}`, cita, {headers: this.httpHeaders})
    }
    
}