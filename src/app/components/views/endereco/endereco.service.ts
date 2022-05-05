import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Endereco } from './endereco.model';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findaAll():Observable<Endereco[]>{
    const url = `${this.baseUrl}/api/enderecos`
    return this.http.get<Endereco[]>(url)
  }

  create(endereco: Endereco):Observable<Endereco>{
    const url = `${this.baseUrl}/api/endereco/save`
    return this.http.post<Endereco>(url,endereco)
  }

  mensagem(str: String):void{
    this._snack.open(`${str}`,'OK',{
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 1000
    })
  }
}
