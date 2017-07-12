import { Contact } from './../../shared/model/contact';
import { ContactService } from './../../core/contact.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'ab-contacts-show',
  templateUrl: './contacts-show.component.html',
  styleUrls: ['./contacts-show.component.scss']
})
export class ContactsShowComponent implements OnInit {

  // 1 - Créer ici une propriété contact (comme dans ContactAddComponent)
  // 2 - Ajouter une méthode getById dans le service
  // GET /contacts/123 (où 123 est l'id)
  // 3 - Faire ce composant

  // 4 - Sur le click du bouton Supprimer, supprimer le contact
  // (en pensant à ajouter une méthode dans le service)
  // et rediriger vers la liste (en la raffraichissant)

  contact = new Contact();

  constructor(
    protected contactService: ContactService,
    protected route: ActivatedRoute,
    protected router: Router,
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap(params => this.contactService.getById(params.id))
      .subscribe(contact => this.contact = contact);
  }

  deleteContact() {
    this.contactService.deleteById(this.contact.id)
      .subscribe(contact => {
        this.router.navigate(['contacts']);
      });
  }

}
