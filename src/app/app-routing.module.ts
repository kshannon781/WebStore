import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteEntryComponent } from './delete-entry/delete-entry.component';
import { EntriesComponent } from './entries/entries.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { MaxCostEntryComponent } from './max-cost-entry/max-cost-entry.component';
import { MaxGroupsCostEntryComponent } from './max-groups-cost-entry/max-groups-cost-entry.component';
//route
const routes:Routes = [
  {path:'', component:EntriesComponent},
  {path:'entries', component:EntriesComponent},
  {path:'new-entry', component:NewEntryComponent},
  {path:'delete-entry/:id', component:DeleteEntryComponent},
  {path:'max-cost', component:MaxCostEntryComponent},
  {path:'max-group-cost', component:MaxGroupsCostEntryComponent},
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
