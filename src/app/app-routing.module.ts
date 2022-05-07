import {Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentoCreateComponent } from './components/views/agendamento/agendamento-create/agendamento-create.component';
import { AgendamentoReadComponent } from './components/views/agendamento/agendamento-read/agendamento-read.component';
import { ClienteReadAllComponent } from './components/views/cliente/cliente-read-all/cliente-read-all.component';
import { ClienteReadComponent } from './components/views/cliente/cliente-read/cliente-read.component';
import { EnderecoCreateComponent } from './components/views/endereco/endereco-create/endereco-create.component';
import { EnderecoDeleteComponent } from './components/views/endereco/endereco-delete/endereco-delete.component';
import { EnderecoReadComponent } from './components/views/endereco/endereco-read/endereco-read.component';
import { EnderecoUpdateComponent } from './components/views/endereco/endereco-update/endereco-update.component';
import { HomeComponent } from './components/views/home/home.component';
import { ServicoReadComponent } from './components/views/servico/servico-read/servico-read.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'enderecos',
    component: EnderecoReadComponent

  },
  {
    path:'endereco/create',
    component: EnderecoCreateComponent
  },
  {
    path:'enderecos/delete/id/:id',
    component: EnderecoDeleteComponent
  },
  {
    path:'enderecos/update/id/:id',
    component: EnderecoUpdateComponent
  },
  {
    path:'enderecos/:id_end/clientes',
    component: ClienteReadAllComponent
  },
  {
    path:'agendamentos',
    component: AgendamentoReadComponent
  },
  {
    path:'agendamentos/create',
    component: AgendamentoCreateComponent
  },
  {
    path:'agendamentos/clientes/:id/view',
    component: ClienteReadComponent
  },
  {
    path:'enderecos/:id_end/clientes/:id',
    component :ClienteReadComponent
  },
  {
    path:'agendamentos/servicos/:id/view',
    component: ServicoReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
