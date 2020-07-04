import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThemeModule } from '@my-org/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ThemeModule, BrowserAnimationsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
