import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WebStoreService } from '../services/webstore.service';
// import NgForm
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.scss']
})
export class NewEntryComponent {

  constructor(private service:WebStoreService) { }
  entryForm = new FormGroup({
      itemName : new FormControl('', Validators.required),
      cost: new FormControl('', Validators.required)
    })
    
    public btnMessage = false

    showMessage() {
        this.btnMessage = true
        //this.entryForm.reset();
    }
    
    
    submit(myForm: NgForm): void {

      this.service.createEntry(this.entryForm.value).subscribe((data) => {
        console.log('Data - ',data);
        if (this.entryForm.valid) {
          console.log("Form Submitted!");
        
        }
      })
      console.log(myForm.form.status, myForm.form.dirty, myForm.form.pristine, myForm.form.untouched, myForm.submitted, myForm.dirty, myForm.pristine, myForm.untouched);
     
      // This is the key!
      myForm.resetForm();
  
      console.log(myForm.form.status, myForm.form.dirty, myForm.form.pristine, myForm.form.untouched, myForm.submitted, myForm.dirty, myForm.pristine, myForm.untouched);
  
  
  }
  }

