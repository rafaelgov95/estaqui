import { EstacionamentosRoutingModule } from './estacionamentos-routing.module';
import { EstacionamentosComponent } from './estacionamentos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    EstacionamentosRoutingModule
  ],
  declarations: [EstacionamentosComponent],
  exports:[EstacionamentosComponent]
})
export class EstacionamentosModule { }
