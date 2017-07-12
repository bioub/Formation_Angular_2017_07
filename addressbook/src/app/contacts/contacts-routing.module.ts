import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsAddComponent } from './contacts-add/contacts-add.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

const routes: Routes = [{
  path: '',
  component: ContactsListComponent,
  children: [{
    path: 'ajouter',
    component: ContactsAddComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
