import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteReadAllComponent } from './components/views/cliente/cliente-read-all/cliente-read-all.component';
import { EnderecoCreateComponent } from './components/views/endereco/endereco-create/endereco-create.component';
import { EnderecoDeleteComponent } from './components/views/endereco/endereco-delete/endereco-delete.component';
import { EnderecoReadComponent } from './components/views/endereco/endereco-read/endereco-read.component';
import { EnderecoUpdateComponent } from './components/views/endereco/endereco-update/endereco-update.component';
import { HomeComponent } from './components/views/home/home.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
