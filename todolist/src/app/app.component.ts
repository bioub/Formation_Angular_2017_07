import { Component } from '@angular/core';

// 1 - Créer un composant todolist-form
// Dans le template ajouter un champ et un bouton +
// Au clic du bouton, transmettre le contenu du champs
// au composant parent (App)

// 2 - Stocker dans App les todos saisies dans un tableau

// 3 - Créer un composant todolist-list
// qui reçoit en Input le tableau et qui en fait le rendu

// 4 - Ajouter un bouton - au niveau de la liste
// qui notifie le composant parent, quel todo il faut
// supprimer
// Et la supprimer du tableau (MDN -> Array.prototype.splice)

@Component({
  selector: 'todolist-app',
  template: `
    <todolist-form (onNewTodo)="addTodo($event)"></todolist-form>
    <todolist-list [todos]="todos" (onRemoveTodo)="removeTodo($event)"></todolist-list>
  `,
  styles: []
})
export class AppComponent {
  todos: string[] = [];

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(i) {
    this.todos.splice(i, 1);
  }
}
