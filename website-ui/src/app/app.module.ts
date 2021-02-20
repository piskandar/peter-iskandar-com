import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import {AboutMeComponent} from './about-me/about-me.component';
import {RoleWorkExperienceComponent} from './about-me/role-work-experience/role-work-experience.component';
import {CompanyComponent} from './about-me/company/company.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    RoleWorkExperienceComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
