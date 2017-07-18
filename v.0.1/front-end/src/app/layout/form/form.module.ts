import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';

import { FormRoutingModule } from './form-routing.module';

import { PageHeaderModule } from './../../shared';
@NgModule({
    imports: [
        CommonModule,
        FormRoutingModule,
        PageHeaderModule
    ],
    declarations: [FormComponent]
})
export class FormModule { }
