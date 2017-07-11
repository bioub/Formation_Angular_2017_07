import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'todolist-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() todos: string[];
  @Output() onRemoveTodo = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  removeTodo(i) {
    this.onRemoveTodo.emit(i);
  }

}
