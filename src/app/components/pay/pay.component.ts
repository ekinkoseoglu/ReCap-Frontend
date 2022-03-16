import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { CartItems } from 'src/app/models/cart-items';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css'],
})
export class PayComponent implements OnInit {
  cartItems: CartItem[];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCartList();
  }

  getCartList() {
    this.cartItems = CartItems;
  }
}
