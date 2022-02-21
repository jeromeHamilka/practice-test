import {Component, Input, OnInit} from '@angular/core';
import {AccountService} from "../services/account.service";

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  @Input() titleBar!: string
  @Input() countLocal!: number
  public case50: boolean = false
  public case25: boolean = false

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.countLocal === 50 ? this.case50 = true : this.case25 = true
  }

  public get amount(): number {
    return this.accountService.amount;
  }

  public get countLocalCase50(): number {
    this.accountService.changeColorCase50();
    return this.accountService.countLocalCase50;
  }

  public get countLocalCase25(): number {
    this.accountService.changeColorCase25();
    return this.accountService.countLocalCase25;
  }

  public get backgroundColorCase50(): string {
    return this.accountService.backgroundColorCase50;
  }
  public get backgroundColorCase25(): string {
    return this.accountService.backgroundColorCase25;
  }

  public set amount(value: number) {
    this.accountService.amount = value;
  }
}
