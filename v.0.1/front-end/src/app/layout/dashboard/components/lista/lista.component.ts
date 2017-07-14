import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EstacionamentoGeo } from './../../../../_modelos/estacionamentogeo'

const lista: EstacionamentoGeo[] = [
  { id: 1, name: 'Casa do Higor',label: 'Casa do Higor', lat: -18.5005715, lng:-54.7453306 },
  { id: 2, name: 'Salvina Maria Do Carmo',label: 'Salvina Maria Do Carmo', lat: -18.5087727, lng:-54.7453306  },
  { id: 3, name: 'Casa do Ramon',label: 'Casa do Ramon',lat: -18.4986773, lng: -54.7455217 },
  { id: 4, name: 'Pedro Mendes',label: 'Pedro MendesA' ,lat: -18.5056868, lng:-54.7469895 },
  { id: 5, name: 'Faculdade',label: 'Faculdade', lat: -18.4863752,lng:-54.7550554}
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
     this.selectedEstacionamento = lista[0]
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