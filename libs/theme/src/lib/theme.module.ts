import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

const UIComponents = [HeaderComponent];
@NgModule({
  declarations: [HeaderComponent],
  exports: UIComponents,
})
export class ThemeModule {}
