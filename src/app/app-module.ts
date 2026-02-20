import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { AppRoutingModule } from './app-routing-module';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared-module';
import { FeatureModule } from './feature/feature-module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    RouterOutlet, 
    CommonModule,
    SharedModule,
    FeatureModule,
    AppRoutingModule,    
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
