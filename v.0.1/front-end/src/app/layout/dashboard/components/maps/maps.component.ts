import { Component, OnInit, Input } from '@angular/core';
import { Estacionamento } from './../../../../_modelos/estacionamento'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  @Input() est: Estacionamento;

  constructor() {
    
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.est.localizacao.lat=position.coords.latitude;
        this.est.localizacao.lng = position.coords.longitude;
      });
    }
  }
  ngOnInit() {
  }

}
