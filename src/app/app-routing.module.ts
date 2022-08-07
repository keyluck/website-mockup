import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { TableListComponent } from './components/table-list/table-list.component';
import { TypographyComponent } from './components/typography/typography.component';
import { IconsComponent } from './components/icons/icons.component';
import { MapsComponent } from './components/maps/maps.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { RtlSupportComponent } from './components/rtl-support/rtl-support.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'to-do-1', component: UserProfileComponent },
  { path: 'to-do-2', component: TableListComponent },
  { path: 'to-do-3', component: TypographyComponent },
  { path: 'to-do-4', component: IconsComponent },
  { path: 'to-do-5', component: MapsComponent },
  { path: 'to-do-6', component: NotificationsComponent },
  { path: 'to-do-7', component: RtlSupportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
