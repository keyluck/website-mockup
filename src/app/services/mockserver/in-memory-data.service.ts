import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cardInfo = [
      {
        graph: '#379e48',
        headerContent: 'Daily Sales',
        blockContent: 'increase in todays sales',
        blockIcon: 'arrow',
        footerContent: 'updated 4 minutes ago',
        footerIcon: 'clock',
      },
      {
        graph: '#ff9306',
        headerContent: 'Email Subscriptions',
        blockContent: 'Last Campaign Performance',
        footerContent: 'campaign sent 2 days ago',
        footerIcon: 'clock',
      },
      {
        graph: '#e75a50',
        headerContent: 'Completed Tasks',
        blockContent: 'Last Campaign Performance',
        footerContent: 'campaign sent 2 days ago',
        footerIcon: 'clock',
      }
    ];
    return {cardInfo};
  }

}
