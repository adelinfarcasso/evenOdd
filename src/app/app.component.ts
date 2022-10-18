import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, DoCheck {
  title = 'evenOdd';
  testObject = {
    name: 'test',
    level: 'parent',
  };
  currentReceivedNum: number;
  odd: any = [];
  even: any = [];

  constructor() {}

  //   receiveBuzz() {
  //     alert('Buzz received');
  //   }

  gameStart(currentNo: any) {
    this.currentReceivedNum = currentNo;
    currentNo % 2 === 0 ? this.even.push(currentNo) : this.odd.push(currentNo);
  }

  ngDoCheck(): void {
    console.log(`Odd: ${this.odd} | Even: ${this.even}`);
  }

  ngOnInit(): void {}
}
