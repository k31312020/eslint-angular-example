import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {from, Observable, of, Subject} from 'rxjs';
import {filter} from 'rxjs/operators';
import { take, map, combineAll } from 'rxjs/operators';
import { interval } from 'rxjs';
import { timer, combineLatest } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'firstapp';

  kuenzang: Subject<any>;

  constructor(private router: Router) {}

  ngOnInit() {

// timerOne emits first value at 1s, then once every 4s
    const timerOne$ = timer(1000, 4000);
// timerTwo emits first value at 2s, then once every 4s
    const timerTwo$ = timer(2000, 4000);
// timerThree emits first value at 3s, then once every 4s
    const timerThree$ = timer(3000, 4000);

// when one timer emits, emit the latest values from each timer as an array
    combineLatest(timerOne$, timerTwo$, timerThree$).subscribe(
      ([timerValOne, timerValTwo, timerValThree]) => {
        /*
          Example:
        timerOne first tick: 'Timer One Latest: 1, Timer Two Latest:0, Timer Three Latest: 0
        timerTwo first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 0
        timerThree first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 1
      */
        console.log(
          `Timer One Latest: ${timerValOne},
           Timer Two Latest: ${timerValTwo},
           Timer Three Latest: ${timerValThree}`
        );
      }
    );
  }

  navigate(url) {
    this.router.navigate([url]);
  }
}
