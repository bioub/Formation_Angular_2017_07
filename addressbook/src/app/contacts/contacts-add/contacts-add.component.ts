import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from './../../core/contact.service';
import { Contact } from './../../shared/model/contact';

@Component({
  selector: 'ab-contacts-add',
  templateUrl: './contacts-add.component.html',
  styleUrls: ['./contacts-add.component.scss']
})
export class ContactsAddComponent implements OnInit {

  contact = new Contact();

  constructor(
    protected contactService: ContactService,
    protected router: Router,
  ) { }

  ngOnInit() {
  }

  addContact() {
    this.contactService.create(this.contact)
      .subscribe(contact => {
        this.router.navigate(['contacts']);
      });
  }
}
