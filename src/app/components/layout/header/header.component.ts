import { Component, OnInit } from '@angular/core';
import { NavLinks } from './navlinks';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  sidenavlinks: NavLinks[] = [
    { name: 'Dashboard', url: '/', icon: 'grid-chart', iconClass: 'is-solid' },
    { name: 'User Profile', url: '/to-do-1', icon: 'user' },
    { name: 'Table List', url: '/to-do-2', icon: 'tasks' },
    { name: 'Typography', url: '/to-do-3', icon: 'list' },
    { name: 'Icons', url: '/to-do-4', icon: 'nodes' },
    { name: 'Maps', url: '/to-do-5', icon: 'map-marker' },
    { name: 'Notifications', url: '/to-do-6', icon: 'bell' },
    { name: 'RTL Support', url: '/to-do-7', icon: 'network-globe' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
