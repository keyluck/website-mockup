import { Component, OnInit } from '@angular/core';
import { Task } from './task'
import { CardInfoService } from '../../../services/card-info.service'


interface TaskType {
  title: string;
  icon: string;
  iconClass: string;
}



@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  taskTypes: TaskType[] = [
    { title: "Bugs", icon: "bug", iconClass: "is-solid"},
    { title: "Website", icon: "code", iconClass: "" },
    { title: "Server", icon: "cloud", iconClass: "is-solid" },
    ]

  taskCardInfo: Task[] = [];
    

  constructor(private cardInfoService: CardInfoService) { }

  ngOnInit(): void {
    this.getTaskCardInfo();
   
  }

  getTaskCardInfo(): void {
    this.cardInfoService.getTaskCardInfo()
      .subscribe(cardInfo => this.taskCardInfo = cardInfo);
    
    
  }

 
  

}
