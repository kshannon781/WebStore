import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//material
import { MatTableModule } from "@angular/material/table";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MatInputModule,} from "@angular/material/input";
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

//Service
import { WebStoreService } from './services/webstore.service';

//components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { DeleteEntryComponent } from './delete-entry/delete-entry.component';
import { EntriesComponent } from './entries/entries.component';
import { MaxCostEntryComponent } from './max-cost-entry/max-cost-entry.component';
import { MaxGroupsCostEntryComponent } from './max-groups-cost-entry/max-groups-cost-entry.component';
import { UpdateEntryComponent } from './update-entry/update-entry.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DeleteEntryComponent,
    NewEntryComponent,
    EntriesComponent,
    MaxCostEntryComponent,
    MaxGroupsCostEntryComponent,
    UpdateEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,MatCardModule,MatListModule,
    BrowserAnimationsModule, MatButtonModule, MatTableModule,
    MatInputModule, MatCardModule, MatSelectModule, MatToolbarModule,
    MatDialogModule,MatPaginatorModule,MatSortModule
  ],
  providers: [WebStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
