import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore'

import { KonamiModule } from 'ngx-konami';

import * as rxjs from 'rxjs';

//bootstrap modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PhilosophyComponent } from './philosophy/philosophy.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkComponent } from './work/work.component';

//firebase configuration for auth
const firebaseConfig = {
  apiKey: "AIzaSyByxkU14gf477xZonBHMOIM_3Kq36Lkmag",
  authDomain: "nicks-desk-portfolio.firebaseapp.com",
  databaseURL: "https://nicks-desk-portfolio.firebaseio.com",
  projectId: "nicks-desk-portfolio",
  storageBucket: "nicks-desk-portfolio.appspot.com",
  messagingSenderId: "574268946287",
  appId: "1:574268946287:web:986e796f20b8a045"
};

//main imports to be used throughout the portfolio
@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    SkillsComponent,
    ProjectsComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PhilosophyComponent,
    FooterComponent,
    DashboardComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    KonamiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }