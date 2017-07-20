import { EstacionamentoGeo } from './../../../../_modelos/estacionamentogeo';
import { EstacionamentoService } from './../../../../shared/services/estacionamento/EstacionamentoService.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'autocomplete-map',
  templateUrl: 'autocomplete.component.html',
})
export class AutocompleteComponent {
  stateCtrl: FormControl;
  filteredStates: any;
  selectedEstacionamento: EstacionamentoGeo;
  states: EstacionamentoGeo[];
  @Output() Emite = new EventEmitter();
  constructor(private sercice: EstacionamentoService,

  ) {
    this.stateCtrl = new FormControl();
    this.states = this.sercice.getall();
    this.filteredStates = this.stateCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterStates(name));
  }

  filterStates(val: string) {
    return val ? this.states.filter(s => s.name.toLowerCase().indexOf(val.toLowerCase()) === 0)
      : this.states;
  }
  onSelect(estacinamento: EstacionamentoGeo): void {
    this.selectedEstacionamento = estacinamento;
    console.log('MeuTeste', this.selectedEstacionamento);
    this.Emite.emit(this.selectedEstacionamento);
  }
}