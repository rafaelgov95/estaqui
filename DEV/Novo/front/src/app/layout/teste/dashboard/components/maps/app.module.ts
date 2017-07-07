import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GoogleMapDirective } from './directives/google-map.directive';
import { GoogleMapMarkerDirective } from './directives/google-map-marker.directive';

import { MapsService } from './services/maps.service';
import { GeolocationService } from './services/geolocation.service';
import { GeocodingService } from './services/geocoding.service';

import { MapsComponent } from './maps.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        MapsComponent,
        GoogleMapDirective,
        GoogleMapMarkerDirective
    ],
    providers: [
        MapsService,
        GeolocationService,
        GeocodingService
    ]
  
})
export class AppModule { }
