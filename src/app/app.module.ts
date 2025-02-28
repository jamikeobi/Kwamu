import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home/home.component';
import { FooterComponent } from './shared/reuseableComponents/footer/footer/footer.component';
import { HeaderComponent } from './shared/reuseableComponents/header/header/header.component';
import { AboutComponent } from './pages/about/about/about.component';
import { TeamComponent } from './pages/team/team/team.component';
import { ServicesComponent } from './pages/services/services/services.component';
import { ContactComponent } from './pages/contact/contact/contact.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { IndustriesComponent } from './pages/industries/industries/industries.component';
import { DashboardComponent } from './pages/contact/contact/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    TeamComponent,
    ServicesComponent,
    ContactComponent,
    IndustriesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
     ReactiveFormsModule,
     HttpClientModule,
     BrowserAnimationsModule,
     MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
