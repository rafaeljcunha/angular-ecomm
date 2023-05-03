import { Component } from '@angular/core';
import { FooterService } from '../../services/footer/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  linkedIn: string = 'https://www.linkedin.com/in/rafael-cunha-b2754315b/';
  shouldRenderCheckoutButton = false;

  constructor(private footerService: FooterService) {
    this.footerService.getCheckoutButton().subscribe((showCheckoutButton) => {
      this.shouldRenderCheckoutButton = showCheckoutButton;
    });
  }
}
