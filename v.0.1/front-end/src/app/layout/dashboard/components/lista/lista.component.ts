import { EstacionamentoService } from './../../../../shared/services/estacionamento/EstacionamentoService.service';
import { Observable } from 'rxjs';
import { Component, EventEmitter, Output, Input, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EstacionamentoGeo } from './../../../../_modelos/estacionamentogeo'
import { Estacionamento } from './../../../../_modelos/estacionamento'

import { FormControl } from '@angular/forms';

const esta: Estacionamento[] = [
  {
    id: '1312312',
    proprietario: '1131231',
    nome_fantasia: 'Super Estaciona Logo',
    cnpj: '046345011/000113',
    endereco: [{ rua: 'Salvina Maria Do Carmo', bairro: 'Flavio Garcia', numero: 724 }],
    servicos: [{ nome: 'Cobert' }, { nome: 'Limpo' }],
    situacao: true,
    localizacao: [{ lat: -18.5087727, lng: -54.7453306 }],
    funcionarios: [{ id_funcionario: 'fdaafda' }],
    criada_em: '2017'
  }
]
// const lista: EstacionamentoGeo[] ;
@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnChanges{
  @Output() emit = new EventEmitter();


  // myControl = new FormControl();
  estacinamentos: EstacionamentoGeo[];
  selectedEstacionamento: EstacionamentoGeo;


  constructor(private estaci: EstacionamentoService) {
    this.estacinamentos = this.estaci.getall();
  }
  onSelect(estacinamento: EstacionamentoGeo): void {
    this.selectedEstacionamento = estacinamento;
    // console.log('MeuTeste', this.selectedEstacionamento);
    this.emit.emit(this.selectedEstacionamento);
  }

  ngOnChanges() {
    console.log('MeuTeste', this.selectedEstacionamento);
   }


}
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/