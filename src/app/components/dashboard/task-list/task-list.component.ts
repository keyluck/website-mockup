import { Component, OnInit } from '@angular/core';
import { Task } from './task'
import { CardInfoService } from '../../../services/card-info.service'


interface taskType {
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

  taskTypes: taskType[] = [];

  taskCardInfo: Task[] = [];
    

  constructor(private cardInfoService: CardInfoService) { }

  ngOnInit(): void {
    this.getTaskCardInfo();
    this.getUniqueTaskTypes();
  }

  getTaskCardInfo(): void {
    this.cardInfoService.getTaskCardInfo()
      .subscribe(cardInfo => this.taskCardInfo = cardInfo);
  }

  getUniqueTaskTypes() {
    let res = [
    { title: "Bugs", icon: "bug", iconClass: "is-solid"},
    { title: "Website", icon: "code", iconClass: "" },
    { title: "Server", icon: "cloud", iconClass: "is-solid" },
    
    ]
    this.taskTypes = res;
  }

}
