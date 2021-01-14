import { Component, OnInit } from '@angular/core';
import { MedCardFormat } from './med-card-format'

import { CardInfoService } from '../../../services/card-info.service'


@Component({
  selector: 'app-med-cards',
  templateUrl: './med-cards.component.html',
  styleUrls: ['./med-cards.component.scss']
})
export class MedCardsComponent implements OnInit {

  medCardInfo: MedCardFormat[] = [];



  //Variable for dynamic icon/text color for daily sales card
  dailySalesNum = 55;

  constructor(private cardInfoService: CardInfoService) { }

  ngOnInit(): void {
    this.getMedCardInfo();
  }

  getMedCardInfo(): void {
    this.cardInfoService.getMedCardInfo()
      .subscribe(cardInfo => this.medCardInfo = cardInfo);
  }

  getGraphIcon(graph: string) {
    let graphStyles = {
      "display":"block",
      "height": "200px",
      "background-color": graph,
      "border-radius": "0.15rem",
      "margin": "-10px 20px 30px 20px",
      "z-index": "1",
      "box-shadow": "0 5px 5px 0 rgba(0, 0, 0, 0.2)",
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
