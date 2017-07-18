import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EstacionamentosRoutingModule } from './estacionamentos-routing.module';
import { EstacionamentosComponent } from './estacionamentos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderModule } from '../../../shared';

@NgModule({
  imports: [
    CommonModule,
    EstacionamentosRoutingModule,
    PageHeaderModule
  ],
  declarations: [EstacionamentosComponent],
  exports:[EstacionamentosComponent]
})
export class EstacionamentosModule { }
