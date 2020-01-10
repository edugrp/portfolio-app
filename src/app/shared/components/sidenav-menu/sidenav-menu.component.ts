import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.css']
})
export class SidenavMenuComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  @Output() public logoutEvent = new EventEmitter();
  @Input() public isLoggedIn: boolean;
  @Input() public isLoggedOut: boolean;

  constructor() {}

  ngOnInit() {}

  public onSidenavClose() {
    this.sidenavClose.emit();
  }

  public logout() {
    this.logoutEvent.emit();
  }
}
