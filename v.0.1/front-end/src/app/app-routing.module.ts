import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared';
import {LoginModule} from './login/login.module'
const routes: Routes = [
    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule',
        canActivate: [AuthGuard]
    },
    { path: 'login', loadChildren: './login/login.module#LoginModule',  canDeactivate: [AuthGuard] },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes),LoginModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }
