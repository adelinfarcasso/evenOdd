import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css'],
})
export class EvenComponent implements OnInit {
  @Input() testObject: { name: string; level: string };
  constructor() {}

  @Input() even: Number[];

  @Output() buzz = new EventEmitter();

  ngOnInit(): void {}
  //   fireBuzz(e: Event) {
  //     this.buzz.emit(e);
  //   }
}
