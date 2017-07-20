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

  title: string = 'Mapa ';

  constructor() {
    console.log("Meu TEste");

  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.est.lat = position.coords.latitude;
        this.est.lng = position.coords.longitude;

      });
    }
  }
  ngOnInit() {
    this.setCurrentPosition()
  }

}
