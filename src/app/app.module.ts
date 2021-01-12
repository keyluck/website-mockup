import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/layout/header/header.component';

import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';


import { DailySalesComponent } from './components/dashboard/daily-sales/daily-sales.component';
import { UsedSpaceComponent } from './components/dashboard/used-space/used-space.component';
import { RevenueComponent } from './components/dashboard/revenue/revenue.component';
import { GithubComponent } from './components/dashboard/github/github.component';
import { TwitterComponent } from './components/dashboard/twitter/twitter.component';
import { EmailSubscriptionsComponent } from './components/dashboard/email-subscriptions/email-subscriptions.component';
import { CompletedTasksComponent } from './components/dashboard/completed-tasks/completed-tasks.component';
import { TaskListComponent } from './components/dashboard/task-list/task-list.component';
import { EmployeeStatsComponent } from './components/dashboard/employee-stats/employee-stats.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DailySalesComponent,
    UsedSpaceComponent,
    RevenueComponent,
    GithubComponent,
    TwitterComponent,
    EmailSubscriptionsComponent,
    CompletedTasksComponent,
    TaskListComponent,
    EmployeeStatsComponent,
    UserProfileComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
