import { Component, OnInit } from '@angular/core';
import { Contact } from './../../shared/model/contact';
import { ContactService } from './../../core/contact.service';

@Component({
  selector: 'ab-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  filter: string;
  contacts: Contact[] = [];

  constructor(
    protected contactService: ContactService,
  ) { }

  getList() {
    this.contactService
      .getList()
      .subscribe(contacts => this.contacts = contacts);
  }

  ngOnInit() {
    this.getList();

    this.contactService.onWrite.subscribe(contact => {
      this.getList();
    });
  }

  filtrer(e) {
    this.filter = e.target.value;
    this.contactService
      .getWithFilter(this.filter)
      .subscribe(contacts => this.contacts = contacts);
  }

}
