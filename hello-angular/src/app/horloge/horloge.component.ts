import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'hello-horloge',
  templateUrl: './horloge.component.html',
  styleUrls: ['./horloge.component.scss']
})
export class HorlogeComponent implements OnInit {

  @Input() delay = 1000;
  @Input() format = 'HH:mm:ss';
  now: Date;

  constructor(protected titleService: Title) { }

  ngOnInit() {
    this.start();
  }

  update() {
    this.now = new Date();
    this.titleService.setTitle(String(new Date()));
  }

  start() {
    this.update();
    setInterval(this.update.bind(this), this.delay);
  }

}
