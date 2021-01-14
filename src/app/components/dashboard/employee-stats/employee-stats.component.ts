import { Component, OnInit } from '@angular/core';
import { Employee } from './employee'
import { CardInfoService } from '../../../services/card-info.service'


@Component({
  selector: 'app-employee-stats',
  templateUrl: './employee-stats.component.html',
  styleUrls: ['./employee-stats.component.scss']
})
export class EmployeeStatsComponent implements OnInit {

  employeeCardInfo: Employee[] = [];

  constructor(private cardInfoService: CardInfoService) { }

  ngOnInit(): void {
    this.getEmployeeCardInfo();
  }

  getEmployeeCardInfo(): void {
    this.cardInfoService.getEmployeeCardInfo()
      .subscribe(cardInfo => this.employeeCardInfo = cardInfo);
  }

}
