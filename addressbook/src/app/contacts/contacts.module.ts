import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsAddComponent } from './contacts-add/contacts-add.component';
import { ContactsShowComponent } from './contacts-show/contacts-show.component';

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    ContactsRoutingModule
  ],
  declarations: [ContactsListComponent, ContactsAddComponent, ContactsShowComponent]
})
export class ContactsModule { }
