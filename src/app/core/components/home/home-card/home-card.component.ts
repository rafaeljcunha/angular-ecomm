import { Component, Input, OnInit } from '@angular/core';
import { HomeCard } from '../../../types/home-card.type';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css'],
})
export class HomeCardComponent {
  @Input() title = '';
  @Input() description = '';
}
