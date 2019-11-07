import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './header/header.component';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardListComponent } from './card-list/card-list.component';
import { WatchTableComponent } from './watch-table/watch-table.component';

export const components: any[] = [
  MainLayoutComponent,
  HeaderComponent,
  SidenavMenuComponent,
  CardDetailComponent,
  CardListComponent,
  WatchTableComponent
];

export * from './main-layout/main-layout.component';
export * from './header/header.component';
export * from './sidenav-menu/sidenav-menu.component';
export * from './card-detail/card-detail.component';
export * from './card-list/card-list.component';
export * from './watch-table/watch-table.component';
