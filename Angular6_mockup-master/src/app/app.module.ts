import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { 
  MatListModule,
  MatExpansionModule,
  MatInputModule,
  MatCheckboxModule,
} from "@angular/material";

import { AppComponent } from './app.component';
import { EntityComponent } from './list/list.component';
import { ConnectedComponent } from './connected/connected.component'
import { AppRoutingModule }  from './app-routing.module';

import { EntityService } from './services/entity.service';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EntityComponent,
    ConnectedComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatExpansionModule,   
    MatInputModule,
    MatCheckboxModule,
    AppRoutingModule
  ],
  providers: [
    EntityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }





