import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Welcome to {{title}}!!
    </h1>
    <hr />
    <hello-horloge [delay]="1000"></hello-horloge>
    <hr />
    <hello-form (onClickNotifier)="handleClickNotifier($event)"></hello-form>
    <div *ngFor="let prenom of prenoms; index as i; last as isLast">
      {{prenom}} - {{i}}
      <button *ngIf="isLast">+</button>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = 'Angular';

  prenoms: string[] = ['Romain', 'Jean'];

  handleClickNotifier(prenom: string) {
    this.prenoms.push(prenom);
  }
}
