import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista.component';

import { AgmCoreModule } from '@agm/core';
import { MapsModule } from '../maps/maps.module';

@NgModule({
    imports: [
        CommonModule
        // MapsM/odule
    ],
    declarations: [
        ListaComponent
    ], exports: [ListaComponent]
})
export class ListaModule { }
