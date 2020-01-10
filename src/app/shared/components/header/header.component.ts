import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  @Output() public logoutEvent = new EventEmitter();
  @Input() public isLoggedIn: boolean;
  @Input() public isLoggedOut: boolean;

  constructor() {}

  ngOnInit() {}

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };

  public logout() {
    this.logoutEvent.emit();
  }
}
