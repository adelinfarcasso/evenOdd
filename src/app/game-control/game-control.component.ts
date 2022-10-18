import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  constructor() {}

  currentNo: number = 0;
  odd: number[] = [];
  even: number[] = [];
  running: Boolean = false;
  intervalHolder: any;

  @Output() gameStarted = new EventEmitter<number>();

  interval() {
    this.running = !this.running;
    this.intervalHolder = setInterval(() => {
      if (this.running) {
        this.currentNo += 1;
        this.currentNo % 2 === 0
          ? this.odd.push(this.currentNo)
          : this.even.push(this.currentNo);
        this.gameStarted.emit(this.currentNo);
      }
    }, 1000);
  }

  stopCount() {
    this.running = false;
    clearInterval(this.intervalHolder);
  }

  onStop(): void {}

  ngOnInit(): void {}

  //   timerStarted(): void {
  //     this.timer.emit({
  //       intervalNumber: this.currentNo,
  //     });
  //   }
  startInterval(): void {}
}

//   onStart(e: Event): void {
//    setInterval(() => {
//       this.currentNo += 1;
//       this.currentNo % 2 === 0
//         ? this.odd.push(this.currentNo)
//         : this.even.push(this.currentNo);
//       this.gameStarted.emit(this.currentNo);
//     }, 1000);
//   }
