import { Component, OnInit } from '@angular/core';
import { MedCardFormat } from './med-card-format';
import { MedChartInfo } from './medChartInfo';
import { CardInfoService } from '../../../services/card-info.service';


@Component({
  selector: 'app-med-cards',
  templateUrl: './med-cards.component.html',
  styleUrls: ['./med-cards.component.scss']
})
export class MedCardsComponent implements OnInit {

  medChartInfo: MedChartInfo[] = [];

  medCardInfo: MedCardFormat[] = [
      {
        graph: '#379e48',
        headerContent: 'Daily Sales',
        blockContent: ' in todays sales',
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



  //Variable for dynamic icon/text color for daily sales card
  dailySalesNum = 55;

  constructor(private cardInfoService: CardInfoService) { }

  ngOnInit(): void {
    this.getMedCardInfo();
  }

  getMedCardInfo(): void {
    this.cardInfoService.getMedCardInfo()
      .subscribe(cardInfo => this.medChartInfo = cardInfo);
  }

  getGraphBackground(graph: string) {
    let graphStyles = {
      "background-color": graph,
    }
    return graphStyles;
  }

  //Function for unique styling of cards
  getBlockContentStyles(i: number) {
    switch (i) {
      case 0: this.getDailySales(i, this.dailySalesNum)
              return 'inline'
      default: return 'none'
    }
  }

  // Function for dynamic icon/text color depending on Daily sales value
  getDailySales(i: number, num: number) {
    let str = num.toString() + "%";

    this.medCardInfo[i].blockIconValue = str;
    if (num > 0) {
      this.medCardInfo[i].blockIcon = "arrow"
      this.medCardInfo[i].blockIconColor = "green"
    }
    else if (num < 0) {
      this.medCardInfo[i].blockIcon = "arrow down"
      this.medCardInfo[i].blockIconColor = "red"
    }
    else {
      
    }
  }

}
