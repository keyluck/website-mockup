import { Component, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss']
})
export class TwitterComponent implements OnInit {
  faTwitter = faTwitter;
  

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
      "background-color": "#1DA1F2",
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
