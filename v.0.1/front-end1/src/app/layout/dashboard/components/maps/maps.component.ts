import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  title: string = 'Mapa ';
  lat  = 51.678418;
  lng  = 7.809007;
  constructor() { }

  ngOnInit() {
  }

}
