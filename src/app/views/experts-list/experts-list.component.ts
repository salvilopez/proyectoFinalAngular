import { Component, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs/internal/Subscription';
import { Expert } from 'src/app/models/expert/expert.model';
import {ExpertsService} from 'src/app/services//experts/experts.service'
@Component({
  selector: 'app-experts-list',
  templateUrl: './experts-list.component.html',
  styleUrls: ['./experts-list.component.scss']
})
export class ExpertsListComponent implements OnInit {

expertList:Expert[]=[]
  expertSubscription: Subscription = new Subscription();
  expertResponse:any={}
  constructor(private expertsService:ExpertsService,  private snackBar: MatSnackBar,) {



   }

  ngOnInit(): void {
    this.getExperts();
  }
getExperts(){
  this.expertSubscription=this.expertsService.getAllExperts(this.expertResponse).subscribe((response)=>{
    this.expertList=response;
    console.log(this.expertList)
  },(err)=>{
    this.snackBar.open('Erroral Traer la lista de Contactos', err.message, {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  });

}
}
