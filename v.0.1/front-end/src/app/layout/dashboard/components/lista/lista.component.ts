import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EstacionamentoGeo } from './../../../../_modelos/estacionamentogeo'

const lista: EstacionamentoGeo[] = [
  { id: 1, name: 'Rua dos amor', lat: 12.321, lng: 31231231 },
  { id: 2, name: 'Salvina Maria Do Carmo', lat: -18.5087727, lng:-54.7453306  },
  { id: 3, name: 'Centro', lat: 12.321, lng: 31231231 },
  { id: 4, name: 'Pedro Mendes', lat: -18.5056868, lng:-54.7469895 },
  { id: 5, name: 'Centro 2', lat: 12.321, lng: 31231231 }
];

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  title = 'Estacionamentos';
  estacinamentos = lista;
  selectedEstacionamento: EstacionamentoGeo;
  constructor(){
     this.selectedEstacionamento ={ id: 11, name: 'Rua dos amor', lat: 12.321, lng: 31231231 };
  }  
  onSelect(estacinamento: EstacionamentoGeo): void {
    this.selectedEstacionamento = estacinamento;
    console.log('MeuTeste',this.selectedEstacionamento);
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/