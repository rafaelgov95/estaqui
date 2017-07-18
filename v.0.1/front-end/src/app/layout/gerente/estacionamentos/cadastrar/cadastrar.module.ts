import { CadastrarComponent } from './cadastrar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from '../../../../shared';

@NgModule({
  imports: [
    CommonModule,
    PageHeaderModule
  ],
  declarations: [ CadastrarComponent],
  exports:[CadastrarComponent]
})
export class CadastrarModule { }
