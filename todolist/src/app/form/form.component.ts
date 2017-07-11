import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'todolist-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  todo: string;
  @Output() onNewTodo = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    this.onNewTodo.emit(this.todo);
  }

}
