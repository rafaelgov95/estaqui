import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguracoesComponent } from './configuracoes.component';
import { ConfiguracoesRoutingModule } from './configuracoes-routing.module';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        ConfiguracoesRoutingModule,
        PageHeaderModule,
    ],
    declarations: [ConfiguracoesComponent]
})
export class ConfiguracoesModule { }
