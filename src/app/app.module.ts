import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginComponent } from './components/login/login.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { RegisterComponent } from './components/register/register.component';
import { TagsListComponent } from './views/tags-list/tags-list.component';
import { ExpertsListComponent } from './views/experts-list/experts-list.component';
import { TagsPageComponent } from './pages/tags-page/tags-page.component';
import { ExpertsPageComponent } from './pages/experts-page/experts-page.component';

import { SideNavComponent } from './components/side-nav/side-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    LoginComponent,
    NotFoundPageComponent,
    RegisterComponent,
    TagsListComponent,
    ExpertsListComponent,
    TagsPageComponent,
    ExpertsPageComponent,
    SideNavComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatSidenavModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
