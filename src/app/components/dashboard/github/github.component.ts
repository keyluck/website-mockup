import { Component, OnInit } from '@angular/core';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {
  faExclamationCircle = faExclamationCircle;
  
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
      "background-color": "#E75A50",
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
