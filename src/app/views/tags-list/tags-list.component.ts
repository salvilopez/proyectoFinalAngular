import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs/internal/Subscription';
import { Tag } from 'src/app/models/tag/tag.model';
import { TagsService } from 'src/app/services/tags/tags.service';

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.scss']
})
export class TagsListComponent implements OnInit {

  tagsList:Tag[]=[]
  tagsSubscription: Subscription = new Subscription();
  constructor(private tagService:TagsService,  private snackBar: MatSnackBar,) {



  }

 ngOnInit(): void {
   this.getTags();
 }
 getTags(){
 this.tagsSubscription=this.tagService.getAllTags().subscribe((response)=>{
   this.tagsList=response;
   console.log(this.tagsList)
 },(err)=>{
   this.snackBar.open('Erroral Traer la lista de Etiquetas', err.message, {
     duration: 2000,
     horizontalPosition: 'center',
     verticalPosition: 'top',
   });
 });

}

}
