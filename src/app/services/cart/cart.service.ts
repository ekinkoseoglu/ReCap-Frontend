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
      let carItem: CartItem;
      carItem.quantity = 1;
      carItem.carDto = carDto;
      CartItems.push(carItem);
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
