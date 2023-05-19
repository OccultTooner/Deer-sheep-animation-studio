import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DeerMainPageComponent } from './pages/deer-main-page/deer-main-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

const routes: Routes = [
  { path: 'home', component: DeerMainPageComponent },
  { path: 'about-us', component: AboutUsPageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'contact-us', component: ContactPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: DeerMainPageComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
