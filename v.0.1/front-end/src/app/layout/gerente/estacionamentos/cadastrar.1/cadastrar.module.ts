
import { AgmCoreModule } from '@agm/core';
import { GoogleComponent } from './../google/google.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CadastrarComponent } from './cadastrar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from '../../../../shared';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
      AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDYeNFzbOHKshPnZ11jefzhIlvUmufvr5w',
      libraries: ["places"]
    }),
    CommonModule,
    PageHeaderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [GoogleComponent, CadastrarComponent],
  exports:[CadastrarComponent,GoogleComponent],
  providers:[]
})
export class CadastrarModule { }
