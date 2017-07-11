import { ContactsModule } from './contacts/contacts.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsAddComponent } from './contacts/contacts-add/contacts-add.component';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';


const routes: Routes = [{
  path: '',
  component: ContactsListComponent,
}, {
  path: 'ajouter',
  component: ContactsAddComponent,
}];

@NgModule({
  imports: [ContactsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
