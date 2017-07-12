import { Contact } from './../../shared/model/contact';
import { Component, OnInit } from '@angular/core';
import { ContactService } from './../../core/contact.service';

@Component({
  selector: 'ab-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  contacts: Contact[] = [];

  constructor(
    protected contactService: ContactService,
  ) { }

  ngOnInit() {
    this.contactService
      .getList()
      .subscribe(contacts => this.contacts = contacts);
  }

}
