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
  // lat=0;
  // lng=0;
  // lat ;
  // lng ;
  constructor() {
    console.log(this.est);
    // this.lat = this.est.lat;
    // this.lng = this.est.lng;
  }
    modou(evento){
      console.log(evento);
    }




  ngOnInit() {
    //  this.estacionamento.lat = 1;
    // this.estacionamento.lng = 1;
  }

}
