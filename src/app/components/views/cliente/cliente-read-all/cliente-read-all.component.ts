import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClinteService } from '../clinte.service';

@Component({
  selector: 'app-cliente-read-all',
  templateUrl: './cliente-read-all.component.html',
  styleUrls: ['./cliente-read-all.component.css']
})
export class ClienteReadAllComponent implements OnInit {

  displayedColumns: string [] = ["id","nome","data_nascimento","usuarios","acoes"];
  id_end:String = ''
  clientes:Cliente[] = []

  constructor(private service:ClinteService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id_end = this.route.snapshot.paramMap.get('id_end')!
    this.findAll()
  }

  findAll(){
    this.service.findAllByEndereco(this.id_end).subscribe((resposta)=>{
      this.clientes = resposta;
    })
  }

}
