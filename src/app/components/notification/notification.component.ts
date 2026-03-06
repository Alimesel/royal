import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {
  message = '';
  visible = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.notification$.subscribe(msg => {
      if (msg) { this.message = msg; this.visible = true; }
      else { this.visible = false; }
    });
  }
}
