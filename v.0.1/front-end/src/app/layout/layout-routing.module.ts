import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,

        children: [
            
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            // { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'configuracoes', loadChildren: './configuracoes/configuracoes.module#ConfiguracoesModule' },
            { path: 'gerente', loadChildren: './gerente/gerente.module#GerenteModule' },
            // { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            // { path: 'forms', loadChildren: './form/form.module#FormModule' },
            // { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            // { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
            // { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            // { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
        ]
    }
    // ,
    // {
    //     // path: 'configuracoes', component: './configuracoes/configuracoes.module#ConfiguracoesModule',
    //     // path: 'configuracoes', component: ConfiguracoesComponent,
    //     path: 'configuracoes', loadChildren: './configuracoes/configuracoes.module#ConfiguracoesModule'
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
