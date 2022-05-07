import { Component, OnInit } from '@angular/core';
import { Agendamento } from '../agendamento.model';
import { AgendamentoService } from '../agendamento.service';


@Component({
  selector: 'app-agendamento-read',
  templateUrl: './agendamento-read.component.html',
  styleUrls: ['./agendamento-read.component.css']
  
})
export class AgendamentoReadComponent implements OnInit {

  agendamentos: Agendamento[] = []
  displayedColumns: string[] = ['id', 'data_agendamento', 'funcionario','cliente','servico'];
  

  constructor(private service: AgendamentoService) { }

  ngOnInit():void {
    this.findAll()
  }

  findAll():void{
    this.service.findAll().subscribe((resposta)=>{
      this.agendamentos = resposta
      console.log(this.agendamentos)
    })
  }
  

}
