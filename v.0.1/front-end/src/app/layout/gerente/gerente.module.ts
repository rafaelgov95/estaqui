import { EstacionamentoService } from './../../shared/services/estacionamento/EstacionamentoService.service';
import { EstacionamentosModule } from './estacionamentos/estacionamentos.module';
import { GerenteRoutingModule } from './gerente-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerenteComponent } from './gerente.component';


@NgModule({
  imports: [
    CommonModule,
    GerenteRoutingModule,
    EstacionamentosModule
  ],providers:[
    EstacionamentoService
  ],
    declarations: [GerenteComponent]
  ,exports:[GerenteComponent]
})
export class GerenteModule { }
