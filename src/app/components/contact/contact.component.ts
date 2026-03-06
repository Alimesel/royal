import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  form = { name:'', phone:'', date:'', time:'7:00 PM', guests:'2 Guests', occasion:'Regular Dinner' };
  timeOptions = ['6:30 PM','7:00 PM','7:30 PM','8:00 PM','8:30 PM','9:00 PM','9:30 PM','10:00 PM'];
  guestOptions = ['1 Guest','2 Guests','3 Guests','4 Guests','5-6 Guests','7-8 Guests','9+ Guests'];
  occasionOptions = ['Regular Dinner','Birthday','Anniversary','Business Dinner','Proposal','Family Celebration'];

  constructor(private cartService: CartService) {}

  reserve(): void {
    this.cartService.notify('Reservation confirmed! We\'ll contact you shortly.');
  }
}
