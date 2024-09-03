import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';

// Confiration of the locale
import localeEsPE from '@angular/common/locales/es-PE';
import localeJa from '@angular/common/locales/ja';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEsPE);
registerLocaleData(localeJa)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    {
      provide: LOCALE_ID , useValue: 'es-PE' // To globally set the locale
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
