import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import {CdkAccordionModule} from '@angular/cdk/accordion';
import { DeerHeaderComponent } from './page-basics/deer-header/deer-header.component';
import { DeerFooterComponent } from './page-basics/deer-footer/deer-footer.component';
import { DeerMainPageComponent } from './pages/deer-main-page/deer-main-page.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageBannerComponentComponent } from './page-basics/image-banner-component/image-banner-component.component';
import { SocialMediaLinksComponent } from './page-basics/social-media-links/social-media-links.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DeerHeaderComponent,
    DeerFooterComponent,
    DeerMainPageComponent,
    ImageBannerComponentComponent,
    SocialMediaLinksComponent,
    AboutUsPageComponent,
    ProjectsPageComponent,
    ContactPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    CdkAccordionModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
