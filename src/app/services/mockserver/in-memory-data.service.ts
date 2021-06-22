import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  

  createDb() {
    const smCardData = [
      "49/50 GB",
      "$34,245",
      "75",
      "+245"
    ];

    const medCardData = [
      {
        data: [11, 14, 4, 13, 16, 14, 34],
        labels: ['M', 'T', 'W', 'Th', 'F', 'S', 'S',]
      },
      {
        data: [460, 350, 300, 650, 486, 350, 330, 360, 495, 510, 650, 690],
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
      },
      {
        data: [110, 690, 310, 280, 250, 220, 200, 190],
        labels: ['12p', '3p', '6p', '9p', '12a', '3a', '6a', '9a']
      }

    ]
    

    const taskCardInfo = [
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

    const employeeCardInfo = [
      { id: '1', name: 'Dakota Rice', salary: '36738', location: 'Niger' },
      { id: '2', name: 'Minvera Hooper', salary: '23789', location: 'Curaçao' },
      { id: '3', name: 'Sage Rodriguez', salary: '56142', location: 'Netherlands' },
      { id: '4', name: 'Philip Chaney', salary: '38735', location: 'Korea, South' },
      
    ];
    
    

    return {smCardData, medCardData, taskCardInfo, employeeCardInfo};
  }

}
