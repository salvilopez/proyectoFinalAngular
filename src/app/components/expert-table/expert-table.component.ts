import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ExpertRequest } from 'src/app/models/expert/expert-request.model';
import { Expert } from 'src/app/models/expert/expert.model';

@Component({
  selector: 'app-expert-table',
  templateUrl: './expert-table.component.html',
  styleUrls: ['./expert-table.component.scss']
})
export class ExpertTableComponent implements OnInit {
  @Input() expertsList:Expert[]=[]
  @Output() datosGet:any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  constructor() {

  }
  ngOnInit(): void {
  }

}
