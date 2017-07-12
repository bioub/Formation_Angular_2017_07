import { Http, Response } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { Contact } from './../shared/model/contact';
import { environment } from './../../environments/environment';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

const URL = environment.backendUrl + '/contacts';

@Injectable()
export class ContactService {

  onWrite = new EventEmitter<Contact>();

  constructor(protected http: Http) { }

  getList(): Observable<Contact[]> {
    return this.http.get(URL)
      .map((res: Response) => res.json());
  }

  create(contact: Contact): Observable<Contact> {
    return this.http.post(URL, contact)
      .map((res: Response) => res.json())
      .do(contact => this.onWrite.emit(contact));
  }

  getById(id: string|number): Observable<Contact> {
    return this.http.get(URL + '/' + id)
          .map((res: Response) => res.json());
  }

  deleteById(id: string|number): Observable<Contact> {
    return this.http.delete(URL + '/' + id)
          .map((res: Response) => res.json())
          .do(contact => this.onWrite.emit(contact));
  }

  getWithFilter(value) {
    return this.http.get(URL + '?q=' + value)
          .map((res: Response) => res.json());
  }

}
