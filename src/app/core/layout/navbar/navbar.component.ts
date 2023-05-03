import { Component, OnInit } from '@angular/core';
import { NavBarLink } from '../../types/navbar.type';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  navLinks: NavBarLink[] = [
    { routerLink: '', title: 'Início', icon: 'home' },
    { routerLink: '/products', title: 'Produtos', icon: 'storefront' },
  ];
  activeLink: NavBarLink = { routerLink: '/', title: 'Início', icon: 'home' };

  ngOnInit(): void {
    if (!this.activeLink.title) {
      this.activeLink = this.activeLink;
    }
  }

  onClickNavItem(navLink: NavBarLink): void {
    this.activeLink = navLink;
  }

  getActiveLink(navLink: NavBarLink): boolean {
    return this.activeLink === navLink;
  }
}
