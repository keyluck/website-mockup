import { Component, OnInit } from '@angular/core';
import { faStoreAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.scss']
})
export class RevenueComponent implements OnInit {
  faStoreAlt = faStoreAlt;
  constructor() { }

  ngOnInit(): void {
  }

  getStyles() {
    let myStyles = {
      "position": "absolute",
      "color": "white",
      "margin-top": "-18px",
      "margin-left": "20px",
      "box-shadow": "0 5px 5px 0 rgba(0, 0, 0, 0.2)",
      "background-color": "#389A48",
      "height": "80px",
      "width": "80px",
      "border-radius": ".15rem",
      "display": "flex",
      "align-items": "center",
      "justify-content":"center"
      
    };
    return myStyles;
  } 


}
