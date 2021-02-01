import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderDarkComponent } from './header-dark/header-dark.component';
import { HeaderLightComponent } from './header-light/header-light.component';
import { FooterDarkComponent } from './footer-dark/footer-dark.component';
import { FooterLightComponent } from './footer-light/footer-light.component';


@NgModule({
  declarations: [HeaderDarkComponent, HeaderLightComponent, FooterDarkComponent, FooterLightComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
