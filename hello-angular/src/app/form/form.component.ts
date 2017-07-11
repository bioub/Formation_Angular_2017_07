import { 
  Component, 
  OnInit, 
  EventEmitter, 
  Output
} from '@angular/core';

@Component({
  selector: 'hello-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  prenom: string;
  @Output()
  onClickNotifier = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onChange(event) {
    this.prenom = event.target.value;
  }

  notifier() {
    this.onClickNotifier.emit(this.prenom);
  }
}
