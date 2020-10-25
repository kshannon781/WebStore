import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ItemName, StoreItemModel } from '../entries/models/storeitemmodel';
import { WebStoreService } from '../services/webstore.service';

@Component({
  selector: 'app-max-cost-entry',
  templateUrl: './max-cost-entry.component.html',
  styleUrls: ['./max-cost-entry.component.scss']
})
export class MaxCostEntryComponent implements OnInit {

  public itemNames: ItemName[];
  sampleform: FormGroup; 
  constructor( 
    fb: FormBuilder,
    private service:WebStoreService,) {
      this.sampleform = fb.group({  
        'itemName': [null]   // will use the property in html page  
        })  
     }

  ngOnInit() {
    this.getItems();
  }
   //Get the list of languages  
  
   getItems() {  
    this.service.getListItem()
    .subscribe(res => {
      this.itemNames = res as ItemName[];
      console.log(res);
    })
}
  public name:any;
  public str:any;
changeEvent(e) {
  console.log(e.target.value);
  this.service.getMaxPrice(e.target.value)
  .subscribe(res => {
    this.name = res as any;
    console.log(res);
  })
}

}


