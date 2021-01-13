import { Component, OnInit } from '@angular/core';
import { MedCardFormat } from './med-card-format'

import { CardInfoService } from '../../../services/card-info.service'


@Component({
  selector: 'app-med-cards',
  templateUrl: './med-cards.component.html',
  styleUrls: ['./med-cards.component.scss']
})
export class MedCardsComponent implements OnInit {

  cardInfo: MedCardFormat[] = [];

  //Variable for dynamic icon/text color for daily sales card
  dailySalesNum = 55;

  constructor(private cardInfoService: CardInfoService) { }

  ngOnInit(): void {
    this.getMedCardInfo();
  }

  getMedCardInfo(): void {
    this.cardInfoService.getMedCardInfo()
      .subscribe(cardInfo => this.cardInfo = cardInfo);
  }

  getGraphIcon(graph: string) {
    let graphStyles = {
      "height": "200px",
      "width": "330px",
      "background-color": graph,
      "border-radius": "0.15rem",
      "margin-top": "-10px",
      "margin-left": "20px",
      "margin-bottom": "30px",
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

    this.cardInfo[i].blockIconValue = str;
    if (num > 0) {
      this.cardInfo[i].blockIcon = "arrow"
      this.cardInfo[i].blockIconColor = "green"
    }
    else if (num < 0) {
      this.cardInfo[i].blockIcon = "arrow down"
      this.cardInfo[i].blockIconColor = "red"
    }
    else {
      
    }
  }

}
