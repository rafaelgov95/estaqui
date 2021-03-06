import { EmitterDelivery } from './../../../../shared/services/EmitterDelivery/EmitterDelivery';
import { EstacionamentoService } from './../../../../shared/services/estacionamento/EstacionamentoService.service';
import { Estacionamento } from './../../../../_modelos/estacionamento';
import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { DataSource } from '@angular/cdk';
import { MdPaginator } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-table',
  styleUrls: ['table.component.scss'],
  templateUrl: 'table.component.html',
})
export class TableComponent implements OnInit {
  displayedColumns = ['Nome','Nome Fantasia',''];
  dataSource: Estacionamento[]| null;
  estacionamentos: Estacionamento[];
  errorMessage: string;


  constructor(private servico: EstacionamentoService) {

  }

  ngOnInit() {
    this.servico.getAllEstacionamentos()
      .subscribe(
      (ListaEstacionamentos: Estacionamento[]) => this.estacionamentos = ListaEstacionamentos,
      error => this.errorMessage = <any>error);

      this.servico.EmitterDelivery.subscribe(est => this.estacionamentos.push(est))
      
      this.dataSource = this.estacionamentos;
  }

  Apagar(estacionamento:Estacionamento){
    console.log(estacionamento)
    this.servico.remove(estacionamento)
      .subscribe(data => this.estacionamentos.splice(this.estacionamentos.indexOf(data),1), err => console.log(err) );
       }
}