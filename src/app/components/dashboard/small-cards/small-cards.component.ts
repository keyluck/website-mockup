import { Component, OnInit } from '@angular/core';
import { CardInfo } from './sm-card-info'
import { faClone } from '@fortawesome/free-regular-svg-icons';
import { faStoreAlt, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-small-cards',
  templateUrl: './small-cards.component.html',
  styleUrls: ['./small-cards.component.scss']
})
export class SmallCardsComponent implements OnInit {

  cardInfo: CardInfo[] = [
    {
      mainIcon: faClone, bgColor: "#FF9306",
      headerContent: "Used Space",
      blockContent: "49/50 GB",
      footerContent: "Get More Space",
      footerIcon: "exclamation-triangle",
    },
    {
      mainIcon: faStoreAlt, bgColor: "#389A48",
      headerContent: "Revenue",
      blockContent: "$34,245",
      footerContent: "Last 24 Hours",
      footerIcon: "calendar",
    },
    {
      mainIcon: faExclamationCircle, bgColor: "#E75A50",
      headerContent: "Fixed Issues",
      blockContent: "75",
      footerContent: "Track from Github",
      footerIcon: "tag",
    },
    {
      mainIcon: faTwitter, bgColor: "#1DA1F2",
      headerContent: "Followers",
      blockContent: "+245",
      footerContent: "Just updated",
      footerIcon: "clock",
    },
    

  ]

  
  constructor() { }

  ngOnInit(): void {
  }

  getStyles(bgColor: string) {
    let myStyles = {
      "position":"absolute",
      "color": "white",
      "margin-top": "-18px",
      "margin-left": "20px",
      "background-color": bgColor,
      "box-shadow": "0 5px 5px 0 rgba(0, 0, 0, 0.2)",
      "height": "80px",
      "width": "80px",
      "border-radius": ".15rem",
      "display": "inline-flex",
      "align-items": "center",
      "justify-content":"center"
      
    };
    return myStyles;
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
