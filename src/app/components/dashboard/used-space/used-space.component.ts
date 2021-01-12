import { Component, OnInit } from '@angular/core';
import { faClone } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-used-space',
  templateUrl: './used-space.component.html',
  styleUrls: ['./used-space.component.scss']
})
export class UsedSpaceComponent implements OnInit {
  faClone = faClone;
  constructor() { }

  ngOnInit(): void {
  }

  getStyles() {
    let myStyles = {
      "position" :"absolute",
      "color": "white",
      "margin-top": "-18px",
      "margin-left": "20px",
      "box-shadow": "0 5px 5px 0 rgba(0, 0, 0, 0.2)",
      "background-color": "#FF9306",
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
