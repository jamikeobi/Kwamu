import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { AboutComponent } from './pages/about/about/about.component';
import { TeamComponent } from './pages/team/team/team.component';
import { ServicesComponent } from './pages/services/services/services.component';
import { ContactComponent } from './pages/contact/contact/contact.component';
import { IndustriesComponent } from './pages/industries/industries/industries.component';
import { DashboardComponent } from './pages/contact/contact/dashboard/dashboard.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'team', component: TeamComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'industries', component: IndustriesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'company', component: DashboardComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
