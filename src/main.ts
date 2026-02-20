/// <reference types="@angular/localize" />

import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app-module';

declare const $: JQuery;

platformBrowser().bootstrapModule(AppModule, {
  
})
  .catch(err => console.error(err));
