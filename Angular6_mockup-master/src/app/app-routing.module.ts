import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityComponent }   from './list/list.component';
import { ConnectedComponent }   from './connected/connected.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: EntityComponent },
  { path: 'connected', component: ConnectedComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { }
