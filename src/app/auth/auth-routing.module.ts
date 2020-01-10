import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components';
import { MainLayoutComponent } from '@shared/components';
import { HomeComponent } from '@shared/components';

const routes: Routes = [
  {
    path: 'login',
    component: MainLayoutComponent,
    children: [{ path: '', component: LoginComponent }]
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [{ path: '', component: HomeComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
