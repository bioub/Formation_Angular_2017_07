import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Contact } from './../shared/model/contact';
import { environment } from './../../environments/environment';

import 'rxjs/add/operator/map';

const URL = environment.backendUrl + '/contacts';

@Injectable()
export class ContactService {

  constructor(protected http: Http) { }

  getList(): Observable<Contact[]> {
    return this.http.get(URL)
      .map((res: Response) => res.json());
  }

}
