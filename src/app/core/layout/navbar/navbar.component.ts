import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { NavBarLink } from '../../types/navbar.type';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTabNavPanel } from '@angular/material/tabs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnChanges {
  navLinks: NavBarLink[] = [
    { routerLink: '', title: 'Início', icon: 'home' },
    { routerLink: '/products', title: 'Produtos', icon: 'storefront' },
  ];
  activeLink: NavBarLink = { routerLink: '/', title: 'Início', icon: 'home' };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (!this.activeLink.title) {
      this.activeLink = this.activeLink;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  onClickNavItem(navLink: NavBarLink): void {
    this.activeLink = navLink;
  }

  getActiveLink(navLink: NavBarLink): boolean {
    return this.activeLink === navLink;
  }
}
