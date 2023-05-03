import { Component, Input, OnInit } from '@angular/core';
import { HomeCard } from '../../../types/home-card.type';

@Component({
  selector: 'app-home-card-list',
  templateUrl: './home-card-list.component.html',
  styleUrls: ['./home-card-list.component.css'],
})
export class HomeCardListComponent {
  @Input() homeInfos = [] as HomeCard[];
}
