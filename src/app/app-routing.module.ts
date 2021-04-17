import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './guard/guard.guard';
import { ExpertsPageComponent } from './pages/experts-page/experts-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { TagsPageComponent } from './pages/tags-page/tags-page.component';

const routes: Routes = [  {
  path: '', // http:localhost:4200/
  pathMatch: 'full',
  redirectTo: '/login'
},
{
  path: 'login', // http:localhost:4200/login
  component: LoginPageComponent
},
{
  path: 'registro', // http:localhost:4200/login
  component: RegisterPageComponent
},
{
  path: 'expertos', // http:localhost:4200/todos
  component: ExpertsPageComponent,
  outlet:'routerNavBar',
  canActivate: [GuardGuard],
},

{
  path: 'etiquetas', // http:localhost:4200/todos/1
  component: TagsPageComponent,
  outlet:'routerNavBar',
  canActivate: [GuardGuard],
},
{
  path: '**',
  component: NotFoundPageComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
