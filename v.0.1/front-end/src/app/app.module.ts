import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './shared';
import { AlertService } from './shared/services/alert.service';
import { AuthenticationService } from './shared/services/autenticacao.service';

import { AgmCoreModule } from '@agm/core';
// import { LoginModule } from './login/login.module';


import { AppComponent } from './app.component';
// import { MapsComponent } from './layout/dashboard/components/maps/maps.component';

@NgModule({
  declarations: [
    AppComponent,
  

    // MapsComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserModule,
    
    //  LoginModule,
    
    TranslateModule.forRoot()
  ],
  providers: [
  AuthGuard,
  AlertService,
  AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
