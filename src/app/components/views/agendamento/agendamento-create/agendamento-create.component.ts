import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';


@Component({
  selector: 'app-agendamento-create',
  templateUrl: './agendamento-create.component.html',
  styleUrls: ['./agendamento-create.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class AgendamentoCreateComponent implements OnInit {
  formulario =  new FormGroup({});
  

  isOptional = false;
  

  constructor(private _formBuilder : FormBuilder) { }

  ngOnInit() {
    this.formulario = this._formBuilder.group({
      firstCtrl: ['',Validators.required]
    });
    
  }

}
