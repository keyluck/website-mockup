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
import { EmailSubscriptionsComponent } from './components/dashboard/email-subscriptions/email-subscriptions.component';
import { CompletedTasksComponent } from './components/dashboard/completed-tasks/completed-tasks.component';
import { TaskListComponent } from './components/dashboard/task-list/task-list.component';
import { EmployeeStatsComponent } from './components/dashboard/employee-stats/employee-stats.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SmallCardsComponent } from './components/dashboard/small-cards/small-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DailySalesComponent,
  
    EmailSubscriptionsComponent,
    CompletedTasksComponent,
    TaskListComponent,
    EmployeeStatsComponent,
    UserProfileComponent,
    DashboardComponent,
    SmallCardsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
