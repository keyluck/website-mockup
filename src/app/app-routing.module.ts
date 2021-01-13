import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component'
import { UserProfileComponent } from './components/user-profile/user-profile.component'

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'userprofile', component: UserProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
