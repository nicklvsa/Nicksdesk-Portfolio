import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { PhilosophyComponent } from './philosophy/philosophy.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
	//main routes
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'about', component: AboutComponent},
	{path: 'login', component: LoginComponent},
	{path: 'register', component: RegisterComponent},
	{path: 'projects', component: ProjectsComponent},
	{path: 'skills', component: SkillsComponent},
	{path: 'resume', component: ResumeComponent},
	{path: 'contact', component: ContactComponent},
	{path: 'philosophy', component: PhilosophyComponent},
	{path: 'dashboard', component: DashboardComponent},
	{path: 'work', component: WorkComponent},
	{path: 'blog', component: BlogComponent},

	//detect invalid route
	{path: '404', component: HomeComponent},
	{path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
  	anchorScrolling: 'enabled',
  	onSameUrlNavigation: 'reload',
  	scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
