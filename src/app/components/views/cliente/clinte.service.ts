import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClinteService {

   baseUrl: String = environment.baseUrl;

  constructor(private http:HttpClient) { }

  findAllByEndereco(id_end: String):Observable<Cliente[]>{
    const url = `${this.baseUrl}/api/cliente?endereco=${id_end}`
    return this.http.get<Cliente[]>(url)

  }
}
