import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebStoreService } from '../services/webstore.service';

@Component({
  selector: 'app-delete-entry',
  templateUrl: './delete-entry.component.html',
  styleUrls: ['./delete-entry.component.scss']
})
export class DeleteEntryComponent implements OnInit {
  entry ={
    itemName:'',
    cost:0,
  }
  id;
  
  constructor(
    private route:ActivatedRoute,
              private service:WebStoreService,
              private router:Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getEntry(this.id).subscribe((data:any) => {
      console.log(data);
      this.entry.itemName = data.itemName;
      this.entry.cost = data.cost;
     
    })
  }

  cancel(){
    this.router.navigate(['/'])
  }

  confirm(){
    this.service.deleteEntry(this.id).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/'])
    })
  }


}
