import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Agendamento } from './agendamento.model';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  baseUrl: String = environment.baseUrl;
  

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }


  findAll():Observable<Agendamento[]>{
    const url = `${this.baseUrl}/api/agendamentos`
    return this.http.get<Agendamento[]>(url)
  }
}
