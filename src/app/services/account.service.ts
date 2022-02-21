import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public mySub = new Subject<number>()
  public amount: number = 0
  public countLocalCase50: number = 50
  public countLocalCase25: number = 25
  public backgroundColorCase50 = "#7160E8"
  public backgroundColorCase25 = "#7160E8"


  constructor() {
  }

  public add5(): void {
    if (this.amount + this.countLocalCase50 < 96) {
      this.amount += 5;
    } else {
      console.log(`Valeur de amount + countLocalCase50 = ${this.amount}`)
    }
    //this.mySub.next(this.amount);
  }

  public add10(): void {
    if (this.amount + this.countLocalCase50 < 91) {
      this.amount += 10;
    } else {
      console.log(`Valeur de amount + countLocalCase50 = ${this.amount}`)
    }
  }

  public reset() {
    this.amount = 0
    this.countLocalCase50 = 0
    this.countLocalCase25 = 0
  }

  public changeColorCase50(): void {
    if (this.amount + this.countLocalCase50 <= 25) {
      this.backgroundColorCase50 = "#7160E8";
    } else if (this.amount + this.countLocalCase50 > 25 && this.amount + this.countLocalCase50 <= 50) {
      this.backgroundColorCase50 = '#60ADE8';
    } else if (this.amount + this.countLocalCase50 > 50 && this.amount + this.countLocalCase50 <= 75) {
      this.backgroundColorCase50 = '#60E8B6';
    } else if (this.amount + this.countLocalCase50 > 75) {
      this.backgroundColorCase50 = '#30DB63';
    }
  }

  public changeColorCase25(): void {
    if (this.amount + this.countLocalCase25 <= 25) {
      this.backgroundColorCase25 = "#7160E8";
    } else if (this.amount + this.countLocalCase25 > 25 && this.amount + this.countLocalCase25 <= 50) {
      this.backgroundColorCase25 = '#60ADE8';
    } else if (this.amount + this.countLocalCase25 > 50 && this.amount + this.countLocalCase25 <= 75) {
      this.backgroundColorCase25 = '#60E8B6';
    } else if (this.amount + this.countLocalCase25 > 75) {
      this.backgroundColorCase25 = '#30DB63';
    }
  }
}
