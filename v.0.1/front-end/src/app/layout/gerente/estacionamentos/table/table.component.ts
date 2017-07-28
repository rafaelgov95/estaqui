import { EstacionamentoService } from './../../../../shared/services/estacionamento/EstacionamentoService.service';
import { Estacionamento } from './../../../../_modelos/estacionamento';
import { Component, ViewChild, OnInit } from '@angular/core';
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
  estacionamentos: any;
  displayedColumns = ['userId', 'userName', 'progress', 'nome_fantasia'];
  exampleDatabase:ExampleDatabase;
  dataSource: ExampleDataSource | null;
  errorMessage: string;
  @ViewChild(MdPaginator) paginator: MdPaginator;
  constructor(private servico: EstacionamentoService) {

  }

  ngOnInit() {
    // this.estacionamentos = new Estacionamento();
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
    this.exampleDatabase = new ExampleDatabase(this.estacionamentos);
    this.Estacionamento()
    if (this.estacionamentos != null ) {
      console.log("Validado")
    } else { console.log("Erro Validacao") }

    if (this.estacionamentos != null && this.estacionamentos.length > 0) {
     for (let b of this.estacionamentos) {
     console.log(b);
    }
  }
}

  Estacionamento() {
    this.servico.getEstacionamentos()
      .subscribe(
      (ListaEstacionamentos: Estacionamento[]) => this.estacionamentos = ListaEstacionamentos,
      error => this.errorMessage = <any>error);

  }
}

/** Constants used to fill up our data base. */


/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<Estacionamento[]> = new BehaviorSubject<Estacionamento[]>([]);
  get data(): Estacionamento[] { return this.dataChange.value; }
  bancoc: any = [{
    id: 1231,
    name: "RafaelViana",
    progress: 111,
    nome_fantasia: "blue"
  }]
  constructor(private banco :any[]) {
    if (banco != null ) {
      console.log("Validado")
    } else { console.log("Erro Validacao") }
    // for (let b of banco) {
    //   const copiedData = this.data.slice();
    //   copiedData.push(b);
    //   this.dataChange.next(copiedData);
    // }
    const copiedData = this.data.slice()
    copiedData.push(this.bancoc);
    this.dataChange.next(copiedData);
  }

  /** Adds a new user to the database. */

}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<any> {
  constructor(private _exampleDatabase: ExampleDatabase, private _paginator: MdPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Estacionamento[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this._exampleDatabase.data.slice();
      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() { }
}