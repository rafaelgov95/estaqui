import { EstacionamentoService } from './../../../shared/services/estacionamento/EstacionamentoService.service';
import { ModalComponent } from './modal/modal.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EstacionamentosRoutingModule } from './estacionamentos-routing.module';
import { EstacionamentosComponent } from './estacionamentos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ MdTableModule,MdPaginatorModule,MdInputModule
} from '@angular/material'
import {CdkTableModule} from '@angular/cdk';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageHeaderModule } from '../../../shared';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    CommonModule,
    EstacionamentosRoutingModule,
    PageHeaderModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
      MdTableModule,
      MdInputModule,
      CdkTableModule,MdPaginatorModule
  ],providers:[EstacionamentoService],
  declarations: [
    EstacionamentosComponent,
    ModalComponent, 
    TableComponent],
  exports:[
    EstacionamentosComponent,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MdTableModule,
    MdInputModule,
    CdkTableModule,MdPaginatorModule]
})
export class EstacionamentosModule { }
