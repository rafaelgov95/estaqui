import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CadastrarComponent } from './cadastrar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from '../../../../shared';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    PageHeaderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ CadastrarComponent],
  exports:[CadastrarComponent],
  providers:[]
})
export class CadastrarModule { }
