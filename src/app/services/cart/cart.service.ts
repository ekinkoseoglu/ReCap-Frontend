import { Injectable } from '@angular/core';
import { CarDto } from 'src/app/models/carDetails';
import { CartItem } from 'src/app/models/cart-item';
import { CartItems } from 'src/app/models/cart-items';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart(carDto: CarDto) {
    let itemToAdd = CartItems.find((c) => c.carDto.id === carDto.id);

    if (itemToAdd) {
      itemToAdd.quantity += 1;
    } else {
      let cartItem = new CartItem();
      cartItem.carDto = carDto;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }
  }

  deleteFromCart(carDto: CarDto) {
    let itemToDelete = CartItems.find((c) => c.carDto.id === carDto.id);

    let indexOfItem = CartItems.indexOf(itemToDelete);
    CartItems.splice(indexOfItem, 1);
  }

  listCartItems() {
    return CartItems;
  }
}
