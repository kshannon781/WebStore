import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WebStoreService } from '../services/webstore.service';

@Component({
  selector: 'app-update-entry',
  templateUrl: './update-entry.component.html',
  styleUrls: ['./update-entry.component.scss']
})
export class UpdateEntryComponent implements OnInit {
  form:FormGroup;
  id:number;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<WebStoreService>,
    @Inject(MAT_DIALOG_DATA){id, itemName, cost},
    private service:WebStoreService) {

      this.id = id;

      this.form = fb.group({
        itemName: [itemName, Validators.required],
        cost: [cost, Validators.required],
      })
}

close(){
  this.dialogRef.close();
}
save(){
  this.form.value.id = this.id;
  console.log(this.id, this.form.value);
  this.service.updateEntry(this.id, this.form.value).subscribe((data) => {
    console.log('Data: ', data);
  })
  this.dialogRef.close();
}

  ngOnInit(): void {
  }

}
