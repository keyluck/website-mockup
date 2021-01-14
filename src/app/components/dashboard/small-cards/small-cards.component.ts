import { Component, OnInit } from '@angular/core';
import { SmallCardFormat } from './small-card-format'
import { faClone } from '@fortawesome/free-regular-svg-icons';
import { faStoreAlt, faExclamationCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import { CardInfoService } from '../../../services/card-info.service'

@Component({
  selector: 'app-small-cards',
  templateUrl: './small-cards.component.html',
  styleUrls: ['./small-cards.component.scss']
})
export class SmallCardsComponent implements OnInit {
  smallCardInfo: SmallCardFormat[] = [];

  constructor(private cardInfoService: CardInfoService) { }

  ngOnInit(): void {
    this.getSmallCardInfo();
  }

  getSmallCardInfo(): void {
    this.cardInfoService.getSmallCardInfo()
      .subscribe(cardInfo => this.smallCardInfo = cardInfo);
  }

  // Convert strings from DB to fa icon
  getIcon(s: string) {  
    switch (s) {
      case 'faClone': return faClone;
      case 'faStoreAlt': return faStoreAlt;
      case 'faExclamationCircle': return faExclamationCircle;
      case 'faTwitter': return faTwitter;
      default: return faTimes;
    }
  }
  
  getIconColor(bgColor: string) {
    let color = {
      "background-color": bgColor,
    };
    return color;
  } 

  // Switches for different icon/text color
  getFooterTextColor(i: number) {
    switch (i) {
      case 0: return "#9e57bc"
        break;
      case 1: return "e0e0e0"
        break;
      case 2: return "e0e0e0"
        break;
      case 3: return "e0e0e0"
        break;
      default: return "#000000"
        break;
    }
  }
  getFooterIconColor(i: number) {
    switch (i) {
      case 0: return "#FF0000"
        break;
      case 1: return "e0e0e0"
        break;
      case 2: return "e0e0e0"
        break;
      case 3: return "e0e0e0"
        break;
      default: return "#000000"
        break;
    }
  }
}
