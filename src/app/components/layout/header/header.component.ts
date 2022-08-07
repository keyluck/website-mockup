import { Component, OnInit } from '@angular/core';
import { NavLinks } from './navlinks';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title = 'Dashboard';
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

  constructor(private router: Router) {
    router.events.subscribe(
      (event: any) => event instanceof NavigationEnd && this.handleRouteChange()
    );
  }
  handleRouteChange = () => {
    switch (this.router.routerState.snapshot.url) {
      case '/to-do-1':
        this.title = 'User Profile';
        break;
      case '/to-do-2':
        this.title = 'Table List';
        break;
      case '/to-do-3':
        this.title = 'Typography';
        break;
      case '/to-do-4':
        this.title = 'Icons';
        break;
      case '/to-do-5':
        this.title = 'Maps';
        break;
      case '/to-do-6':
        this.title = 'Notifications';
        break;
      case '/to-do-7':
        this.title = 'RTL Support';
        break;
      case '/':
      default:
        this.title = 'Dashboard';
    }
  };

  ngOnInit(): void {}
}
