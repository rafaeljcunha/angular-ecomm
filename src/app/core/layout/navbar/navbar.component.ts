import { Component, Input } from '@angular/core';
import { NavBarLink } from '../../types/navbar.type';
import { Router } from '@angular/router';
import { MatTabNavPanel } from '@angular/material/tabs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  navLinks: NavBarLink[] = [
    { routerLink: '', title: 'Início', icon: 'home' },
    { routerLink: '/products', title: 'Produtos', icon: 'storefront' },
  ];
  activeLink: NavBarLink = { routerLink: '/', title: 'Início', icon: 'home' };

  constructor(private router: Router) {}

  onClickNavItem(navLink: NavBarLink): void {
    this.activeLink = navLink;
  }

  getActiveLink(navLink: NavBarLink): boolean {
    return this.activeLink === navLink;
  }
}
