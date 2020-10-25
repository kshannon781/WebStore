
import { ChangeDetectorRef, Component, Inject, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatTableDataSource } from '@angular/material/table';
import { WebStoreService } from '../services/webstore.service';
import { UpdateEntryComponent } from '../update-entry/update-entry.component';
import { StoreItemModel } from '../entries/models/storeitemmodel';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-max-groups-cost-entry',
  templateUrl: './max-groups-cost-entry.component.html',
  styleUrls: ['./max-groups-cost-entry.component.scss']
})
export class MaxGroupsCostEntryComponent implements OnInit {

  displayedColumns: string[] = ['id', 'itemName', 'cost']
  public dataSource = new MatTableDataSource<StoreItemModel>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service:WebStoreService,
    private dialog:MatDialog
  ) { }

 ngOnInit() {
    this.service.getMaxGroup().subscribe((data) => {
      console.log('Result - ', data);
      this.dataSource = new MatTableDataSource<StoreItemModel>(data as StoreItemModel[]);
      this.dataSource.paginator = this.paginator;
    })
  }
  
  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  }


