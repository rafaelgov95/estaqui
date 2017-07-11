import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListaComponent} from './lista.component';

import { AgmCoreModule } from '@agm/core';
import {MapsModule} from './../maps.module';

@NgModule({
    imports: [
        CommonModule,
         MapsModule,
        
         ],
    declarations: [
     
        
        ListaComponent
        

    ],exports:[ListaComponent]
})
export class ListaModule { }
