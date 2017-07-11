import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'ab-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  contacts: {prenom: string, nom: string}[] = [];

  constructor(
    protected http: Http,
  ) { }

  ngOnInit() {
    this.http.get('/assets/db.json')
      .map((res: Response) => res.json())
      .map(obj => obj.contacts)
      .subscribe(contacts => this.contacts = contacts)
  }

}
