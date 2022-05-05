import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Endereco } from './endereco.model';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findaAll():Observable<Endereco[]>{
    const url = `${this.baseUrl}/api/enderecos`
    return this.http.get<Endereco[]>(url)
  }

}
