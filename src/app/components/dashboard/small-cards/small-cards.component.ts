import { Component, OnInit } from '@angular/core';
import { SmallCardFormat } from './small-card-format'
import { faClone } from '@fortawesome/free-regular-svg-icons';
import { faStoreAlt, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import { CardInfoService } from '../../../services/card-info.service'

@Component({
  selector: 'app-small-cards',
  templateUrl: './small-cards.component.html',
  styleUrls: ['./small-cards.component.scss']
})
export class SmallCardsComponent implements OnInit {

  smCardInfo: string[] = [];
  smallCardInfo: SmallCardFormat[] = [
    {
        mainIcon: faClone,
        bgColor: "#FF9306",
        headerContent: "Used Space",
        footerContent: "Get More Space",
        footerIcon: "exclamation-triangle",
      },
      {
        mainIcon: faStoreAlt,
        bgColor: "#389A48",
        headerContent: "Revenue",
        footerContent: "Last 24 Hours",
        footerIcon: "calendar",
      },
      {
        mainIcon: faExclamationCircle,
        bgColor: "#E75A50",
        headerContent: "Fixed Issues",
        footerContent: "Track from Github",
        footerIcon: "tag",
      },
      {
        mainIcon: faTwitter,
        bgColor: "#1DA1F2",
        headerContent: "Followers",
        footerContent: "Just updated",
        footerIcon: "clock",
      },
  ];

 


  constructor(private cardInfoService: CardInfoService) { }

  ngOnInit(): void {
    this.getSmallCardInfo();
    
  }

  getSmallCardInfo(): void {
    this.cardInfoService.getSmallCardInfo()
      .subscribe(cardInfo => this.smCardInfo = cardInfo);
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
