import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThemeModule } from '@my-org/theme';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ThemeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
