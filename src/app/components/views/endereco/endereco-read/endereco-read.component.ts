import { Component, OnInit } from '@angular/core';
import { Endereco } from '../endereco.model';
import { EnderecoService } from '../endereco.service';

@Component({
  selector: 'app-endereco-read',
  templateUrl: './endereco-read.component.html',
  styleUrls: ['./endereco-read.component.css']
})
export class EnderecoReadComponent implements OnInit {

  enderecos: Endereco[] = []

  displayedColumns: string[] = ['id', 'logradouro', 'bairro', 'numero','cep','usuarios','acoes'];

  constructor(private service: EnderecoService) {

   }

  ngOnInit(): void {
    this.findAll();

  }

  findAll(){
    this.service.findaAll().subscribe(resposta =>{
      console.log(resposta);
        this.enderecos = resposta;
    })
  }



}
