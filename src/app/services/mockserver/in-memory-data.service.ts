import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  

  createDb() {
    const smallCardInfo = [
      {
        mainIcon: 'faClone',
        bgColor: "#FF9306",
        headerContent: "Used Space",
        blockContent: "49/50 GB",
        footerContent: "Get More Space",
        footerIcon: "exclamation-triangle",
      },
      {
        mainIcon: 'faStoreAlt',
        bgColor: "#389A48",
        headerContent: "Revenue",
        blockContent: "$34,245",
        footerContent: "Last 24 Hours",
        footerIcon: "calendar",
      },
      {
        mainIcon: 'faExclamationCircle',
        bgColor: "#E75A50",
        headerContent: "Fixed Issues",
        blockContent: "75",
        footerContent: "Track from Github",
        footerIcon: "tag",
      },
      {
        mainIcon: 'faTwitter',
        bgColor: "#1DA1F2",
        headerContent: "Followers",
        blockContent: "+245",
        footerContent: "Just updated",
        footerIcon: "clock",
      },
    ];

    
    const medCardInfo = [
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

    let taskCardInfo = [
      {
        name: `Sign contract for "What are conference organizers afraid of?"`,
        completed: false,
        type: [
          'Bugs', 'Website', 'Server'
        ],
      },
      {
        name: `Lines From Great Russian Literature? Or E-mails From My Boss?`,
        completed: false,
        type: [
          'Bugs', 'Server'
        ],
      },
      {
        name: `Flooded: One year later, assessing what was lost and what was 
                found when a ravaging rain swept through metro Detroit`,
        completed: false,
        type: [
          'Bugs', 'Website', 'Server'
        ],
      },
      {
        name: `Create 4 Invisible User Experiences you Never Knew About`,
        completed: false,
        type: [
          'Bugs',
        ],
      },
    ];


    return {smallCardInfo, medCardInfo, taskCardInfo};
  }

}
