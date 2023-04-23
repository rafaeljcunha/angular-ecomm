import { Component, Input, OnInit } from '@angular/core';
import { HomeCard } from '../../../types/home-card.type';

@Component({
  selector: 'app-home-card-list',
  templateUrl: './home-card-list.component.html',
  styleUrls: ['./home-card-list.component.css'],
})
export class HomeCardListComponent implements OnInit {
  @Input() homeInfos = [] as HomeCard[];

  ngOnInit(): void {
    console.log(this.homeInfos);
  }
}
