import { EstacionamentoGeo } from './../../../_modelos/estacionamentogeo';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';


@Injectable()
export class EstacionamentoService {
    constructor(private http: Http) { }
    getall() {
        const lista: EstacionamentoGeo[] = [
            { id: 1, name: 'Casa do Higor', label: 'Casa do Higor', lat: -18.5005715, lng: -54.7453306 },
            { id: 2, name: 'Salvina Maria Do Carmo', label: 'Salvina Maria Do Carmo', lat: -18.5087727, lng: -54.7453306 },
            { id: 3, name: 'Casa do Ramon', label: 'Casa do Ramon', lat: -18.4986773, lng: -54.7455217 },
            { id: 4, name: 'Pedro Mendes', label: 'Pedro MendesA', lat: -18.5056868, lng: -54.7469895 },
            { id: 5, name: 'Faculdade', label: 'Faculdade', lat: -18.4863752, lng: -54.7550554 }
        ];
        return lista;

    }

}