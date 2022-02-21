import {Component, OnInit } from '@angular/core';
import {AccountService} from "./services/account.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'practice-observable';

  constructor(private accountService: AccountService) {
  }

  ngOnInit() {

  }

  public add5(): void {
    this.accountService.add5()
  }

  public add10(): void {
    this.accountService.add10()
  }

  public get amount(): number {
    return this.accountService.amount;
  }

  public set amount(value: number) {
    this.accountService.amount = value;
  }

  public reset(): void {
    this.accountService.reset()
  }
}
