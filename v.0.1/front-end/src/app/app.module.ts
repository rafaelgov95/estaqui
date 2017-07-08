import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './shared';

import { AlertService } from './shared/services/alert.service';

import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';

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
  AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
