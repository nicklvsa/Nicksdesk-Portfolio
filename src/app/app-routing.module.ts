import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { PhilosophyComponent } from './philosophy/philosophy.component';

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'about', component: AboutComponent},
	{path: 'login', component: LoginComponent},
	{path: 'register', component: RegisterComponent},
	{path: 'projects', component: ProjectsComponent},
	{path: 'skills', component: SkillsComponent},
	{path: 'resume', component: ResumeComponent},
	{path: 'contact', component: ContactComponent},
	{path: 'philosophy', component: PhilosophyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
