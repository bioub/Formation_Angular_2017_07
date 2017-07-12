import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ContactService } from './contact.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    NgbModule.forRoot(),
  ],
  providers: [
    ContactService, // créé la fabrique du service
    // nom d'un classe si automatique (tout est Injectable)
    // function qui retourne l'objet sinon
  ],
  declarations: [
    NavbarComponent,
  ],
  exports: [
    NavbarComponent,
  ]
})
export class CoreModule { }
