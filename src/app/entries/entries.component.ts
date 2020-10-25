import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { WebStoreService } from '../services/webstore.service';
import { UpdateEntryComponent } from '../update-entry/update-entry.component';
import { StoreItemModel } from './models/storeitemmodel';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'itemName', 'cost', 'Actions']
  public dataSource = new MatTableDataSource<StoreItemModel>();
  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  
  constructor(
    private changeDetectorRefs: ChangeDetectorRef,
    private service:WebStoreService,
    public dialog:MatDialog) { }

  ngOnInit()  {
    this.getAllTemplates();
  }
  
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  public getAllTemplates = () => {
    this.service.getAll()
      .subscribe(res => {
        this.changeDetectorRefs.detectChanges();
        this.dataSource.data = res as StoreItemModel[];
        this.dataSource.paginator = this.paginator;
        console.log(res);
    })
  }
  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  updateEntry(entry){
    console.log(entry);
    const dialogRef =  this.dialog.open(UpdateEntryComponent, {
      data: {
        id:entry.id,
        itemName:entry.itemName,
        cost:entry.cost,
        
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log('The dialog was closed');
      this.getAllTemplates();
      }
  );
  }

   
  
  
}
