import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCartList();
  }

  getCartList() {
    this.cartItems = this.cartService.listCartItems();
  }
}
