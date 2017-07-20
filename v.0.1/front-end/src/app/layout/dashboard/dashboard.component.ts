import { EstacionamentoGeo } from './../../_modelos/estacionamentogeo';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    ngOnInit() {
        this.setCurrentPosition()
    }
    selectedEstacionamento: EstacionamentoGeo
    = { id: 1, name: '', label: '', lat: -1, lng: -1 };
    constructor() {
    }
    late: any;
    long: any;
    private setCurrentPosition() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.late = position.coords.latitude;
                this.long = position.coords.longitude;
                console.log(position)
                this.selectedEstacionamento.lng = this.long;
                this.selectedEstacionamento.lat = this.late;
                this.selectedEstacionamento.name = "";
                console.log(this.selectedEstacionamento.name)

            });
        }

    }

    AutoC(event) {
        console.log(event)
        this.selectedEstacionamento = event;
    }
}
