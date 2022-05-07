import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './components/views/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { EnderecoReadComponent } from './components/views/endereco/endereco-read/endereco-read.component';
import { EnderecoCreateComponent } from './components/views/endereco/endereco-create/endereco-create.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { EnderecoDeleteComponent } from './components/views/endereco/endereco-delete/endereco-delete.component';
import { EnderecoUpdateComponent } from './components/views/endereco/endereco-update/endereco-update.component';
import { ClienteReadAllComponent } from './components/views/cliente/cliente-read-all/cliente-read-all.component';
import { AgendamentoReadComponent } from './components/views/agendamento/agendamento-read/agendamento-read.component';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { AgendamentoCreateComponent } from './components/views/agendamento/agendamento-create/agendamento-create.component';
import { ClienteReadComponent } from './components/views/cliente/cliente-read/cliente-read.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ServicoReadComponent } from './components/views/servico/servico-read/servico-read.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    EnderecoReadComponent,
    EnderecoCreateComponent,
    EnderecoDeleteComponent,
    EnderecoUpdateComponent,
    ClienteReadAllComponent,
    AgendamentoReadComponent,
    AgendamentoCreateComponent,
    ClienteReadComponent,
    ServicoReadComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatExpansionModule,
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
    
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
