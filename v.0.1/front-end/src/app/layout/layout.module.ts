import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent, SidebarComponent } from '../shared';
// import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
// import { ConfiguracoesModule} from './configuracoes/configuracoes.module';

@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        LayoutRoutingModule,
        TranslateModule
        // ConfiguracoesModule
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SidebarComponent
        // ConfiguracoesComponent
    ]
})
export class LayoutModule { }
