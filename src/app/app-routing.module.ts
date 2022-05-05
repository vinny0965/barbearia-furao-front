import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnderecoCreateComponent } from './components/views/endereco/endereco-create/endereco-create.component';
import { EnderecoReadComponent } from './components/views/endereco/endereco-read/endereco-read.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
