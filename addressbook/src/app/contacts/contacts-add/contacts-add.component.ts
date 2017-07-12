import { Component, OnInit } from '@angular/core';
import { Contact } from './../../shared/model/contact';

@Component({
  selector: 'ab-contacts-add',
  templateUrl: './contacts-add.component.html',
  styleUrls: ['./contacts-add.component.scss']
})
export class ContactsAddComponent implements OnInit {

  contact = new Contact();

  constructor() { }

  ngOnInit() {
  }

}
