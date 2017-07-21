import {Component, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk';
import {MdPaginator} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-table',
  styleUrls: ['table.component.scss'],
  templateUrl: 'table.component.html',
})
export class TableComponent {
  displayedColumns = ['userId', 'userName', 'progress', 'color'];
  exampleDatabase = new ExampleDatabase();
  dataSource: ExampleDataSource | null;

  @ViewChild(MdPaginator) paginator: MdPaginator;

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
  }
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
  get data(): UserData[] { return this.dataChange.value; }
  banco:any=[{
      id: 1231,
      name: "RafaelViana",
      progress:111,
      color:"blue"
    },{id: 1231,
      name: "RafaelViana",
      progress:111,
      color:"blue"}]
  
  constructor() {
    // Fill up the database with 100 users.
  const copiedData = this.data.slice();
    copiedData.push = this.banco;
    console.log(copiedData)
    console.log(this.banco);
    this.dataChange.next(this.banco);
    console.log( this.dataChange)
    // for (let i = 0; i < 100; i++) { this.addUser(); }
  }

  
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
  connect(): Observable<UserData[]> {
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

  disconnect() {}
}