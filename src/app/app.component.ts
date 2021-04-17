import { Component,DoCheck } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{
  title = 'proyectoFinal';
  logueado:any=false;
  index:number=0;
  constructor(private authService: AuthService) { }


ngDoCheck() {
  this.logueado= sessionStorage.getItem("Token");
}
}
