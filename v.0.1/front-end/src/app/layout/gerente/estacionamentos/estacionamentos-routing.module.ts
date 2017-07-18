import { EstacionamentosModule } from './estacionamentos.module';
import { EstacionamentosComponent } from './estacionamentos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '', component: EstacionamentosComponent       
    }]



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EstacionamentosRoutingModule { }
