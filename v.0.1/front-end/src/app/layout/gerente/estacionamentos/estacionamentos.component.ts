import { Component, OnInit } from '@angular/core';
import {MdMenuModule} from '@angular/material';

@Component({
  selector: 'app-estacionamentos',
  templateUrl: './estacionamentos.component.html',
  styleUrls: ['./estacionamentos.component.scss']
})
export class EstacionamentosComponent implements OnInit {
 adicionar = false;
 selected = '';
  items = [
    {text: 'Adicionar'},
    // {text: 'Settings'},
    // {text: 'Help', disabled: true},
    // {text: 'Sign Out'}
  ];

  iconItems = [
    {text: 'Redial', icon: 'dialpad'},
    {text: 'Check voicemail', icon: 'voicemail', disabled: true},
    {text: 'Disable alerts', icon: 'notifications_off'}
  ];

  select(text: string) { this.selected = text; }
  constructor() { }
  Abrir(){
    console.log("Entro")
    this.adicionar=!this.adicionar;
  }
  ngOnInit() {
    
  }

}
