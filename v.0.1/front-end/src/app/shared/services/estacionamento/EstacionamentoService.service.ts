import { Observable } from 'rxjs';
import { Estacionamento } from './../../../_modelos/estacionamento';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';


@Injectable()
export class EstacionamentoService {
  private testUrl = 'http://localhost:3000/api/estacionamento/listar';

  constructor(private http: Http) { }


  getAll(): Observable<Estacionamento[]> {
    return this.http.get('http://localhost:3000/api/estacionamento/listar').map((response: Response) => response.json());
  }
  create(user: Estacionamento) {
    return this.http.post('http://localhost:3000/api/estacionamento/save', user).map((response: Response) => response.json());
  }
  getEstacionamentos(): Observable<Estacionamento[]> {
    return this.http.get(this.testUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }



  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  private handleError(error: Response | any) {

    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    // console.error(errMsg);
    return Observable.throw(errMsg);
  }
}