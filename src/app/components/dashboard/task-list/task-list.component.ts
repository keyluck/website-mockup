import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  taskTypes = [
    { title: "Bugs", icon: "bug", iconClass: "is-solid"},
    { title: "Website", icon: "code", iconClass: "" },
    { title: "Server", icon: "cloud", iconClass: "is-solid" },
    
  ]
    

  constructor() { }

  ngOnInit(): void {
  }

}
