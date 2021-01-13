import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/layout/header/header.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';


import { TaskListComponent } from './components/dashboard/task-list/task-list.component';
import { EmployeeStatsComponent } from './components/dashboard/employee-stats/employee-stats.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SmallCardsComponent } from './components/dashboard/small-cards/small-cards.component';
import { MedCardsComponent } from './components/dashboard/med-cards/med-cards.component';
import { MessagesComponent } from './components/errorhandling/messages/messages.component';


import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/mockserver/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskListComponent,
    EmployeeStatsComponent,
    UserProfileComponent,
    DashboardComponent,
    SmallCardsComponent,
    MedCardsComponent,
    MessagesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
