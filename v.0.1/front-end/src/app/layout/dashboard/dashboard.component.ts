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
    // selectedEstacionamentoNovo: EstacionamentoGeo

    selectedEstacionamentoNovo: EstacionamentoGeo
    = { id: 1, name: 'Local Atual', label: 'Local Atual', lat: -1, lng: -1 };
    constructor() {
    }
    late: any;
    long: any;
    private setCurrentPosition() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.late = position.coords.latitude;
                this.long = position.coords.longitude;
                console.log(this.selectedEstacionamentoNovo)
                this.selectedEstacionamentoNovo.lng = this.long;
                this.selectedEstacionamentoNovo.lat = this.late;
                this.selectedEstacionamentoNovo.name = "Local Atual";
                this.selectedEstacionamentoNovo.label = "Local Atual";

                console.log("Novo: ", this.selectedEstacionamentoNovo)
            });
        }
        console.log(this.selectedEstacionamentoNovo);
    }

    AutoC(event) {
        console.log(event)
        this.selectedEstacionamentoNovo = event;
    }
    AutoL(event) {
        console.log(event)
        this.selectedEstacionamentoNovo = event;
    }
}
