import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './guard/guard.guard';
import { EtiquetasPageComponent } from './pages/etiquetas-page/etiquetas-page.component';
import { ExpertosPageComponent } from './pages/expertos-page/expertos-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

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
  path: 'expertos', // http:localhost:4200/todos
  component: ExpertosPageComponent,
  canActivate: [GuardGuard],
},
{
  path: 'etiquetas', // http:localhost:4200/todos/1
  component: EtiquetasPageComponent,
  canActivate: [GuardGuard],
},
{
  path: '**',
  component: NotFoundPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
