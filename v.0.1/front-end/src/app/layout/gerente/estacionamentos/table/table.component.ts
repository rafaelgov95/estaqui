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
  estacionamentos: Estacionamento[];
  errorMessage: string;
  @Input() data;

  constructor(private servico: EstacionamentoService) {

  }

  ngOnInit() {
    this.servico.getEstacionamentos()
      .subscribe(
      (ListaEstacionamentos: Estacionamento[]) => this.estacionamentos = ListaEstacionamentos,
      error => this.errorMessage = <any>error);
    console.log(this.estacionamentos)

  } 
}