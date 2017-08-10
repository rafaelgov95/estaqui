import { Estacionamento } from './../../../_modelos/estacionamento';
import { Component, OnInit } from '@angular/core';
import {MdMenuModule} from '@angular/material';

@Component({
  selector: 'app-estacionamentos',
  templateUrl: './estacionamentos.component.html',
  styleUrls: ['./estacionamentos.component.scss']
})
export class EstacionamentosComponent implements OnInit {
 adicionar = false;
 selected = '';
 est : Estacionamento;
  items = [
    {text: 'Adicionar'}
  ];

  

  constructor() { }

  ngOnInit() {
    
  }

  chego(event){
    console.log(event)
    this.est=event;
    this.adicionar=!this.adicionar;
    
  }
}
