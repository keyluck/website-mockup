import { Component, OnInit } from '@angular/core';
import { NavLinks } from './navlinks'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  sidenavlinks: NavLinks[] = [
    { name: "Dashboard", url: "/", icon: "grid-chart" },
    { name: "User Profile", url: "/userprofile", icon: "user"},
    { name: "Table List", url: "/userprofile", icon: "tasks"},
    { name: "Typography", url: "/userprofile", icon: "list"},
    { name: "Icons", url: "/userprofile", icon: "nodes"},
    { name: "Maps", url: "/userprofile", icon: "map-marker"},
    { name: "Notifications", url: "/userprofile", icon: "bell"},
    { name: "RTL Support", url: "/userprofile", icon: "network-globe"},
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
