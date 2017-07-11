import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { EstacionamentoGeo } from './../../../../../_modelos/estacionamentogeo'

const lista: EstacionamentoGeo[] = [
  { id: 11, name: 'Mr. Nice',lat:12.321,lng:31231231 },
  { id: 12, name: 'Narco', lat:12.321,lng:31231231 },
  { id: 13, name: 'Bombasto' ,lat:12.321,lng:31231231 },
  { id: 14, name: 'Celeritas',lat:12.321,lng:3123123 },
  { id: 15, name: 'Magneta' ,lat:12.321,lng:31231231 },
  { id: 16, name: 'RubberMan' ,lat:12.321,lng:31231231 },
  { id: 17, name: 'Dynama' ,lat:12.321,lng:31231231 },
  { id: 18, name: 'Dr IQ' ,lat:12.321,lng:31231231 },
  { id: 19, name: 'Magma' ,lat:2.321,lng:31231231 },
  { id: 20, name: 'Tornado',lat:2.321,lng:31231231 },
];

@Component({
  selector: 'lista',
  template: `
    <h1>{{title}}</h1>
    
    <ul class="heroes">
      <li *ngFor="let estacinamento of estacinamentos"
        // [class.selected]="estacinamento === selectedEstacionamento"
        // (click)="onSelect(estacinamento)">
        <span class="badge">{{estacinamento.id}}</span> {{estacinamento.name}}
      </li>
    </ul>
    <br>
    <br>
    <br>
    <br>
    <br>
    // <app-maps [est]="selectedEstacionamento"></app-maps>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class ListaComponent {
  title = 'Estacionamentos';
  estacinamentos = lista;
  selectedEstacionamento: EstacionamentoGeo;

  onSelect(estacinamento: EstacionamentoGeo): void {
    this.selectedEstacionamento = estacinamento;
    console.log(this.selectedEstacionamento);
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/