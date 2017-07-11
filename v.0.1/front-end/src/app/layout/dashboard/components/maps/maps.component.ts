import { Component, OnInit, Input } from '@angular/core';
import { EstacionamentoGeo } from './../../../../_modelos/estacionamentogeo'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
   @Input() est: EstacionamentoGeo;
  // est  = new EstacionamentoGeo;


  title: string = 'Mapa ';
  // lat = 100000;
  // lng = 13123123;
  // lat ;
  // lng ;
  constructor() {
    // this.lat = this.est.lat;
    // this.lng = this.est.lng;
  }

  ngOnInit() {
    //  this.estacionamento.lat = 1;
    // this.estacionamento.lng = 1;
  }

}
