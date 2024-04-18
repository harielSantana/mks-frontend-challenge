// actions/cartActions.ts

import { Product } from "@/types/Products";

export const addToCart = (product: Product): AddToCartAction => ({
  type: 'ADD_TO_CART',
  payload: product,
});

export const removeFromCart = (productId: number): RemoveFromCartAction => ({
  type: 'REMOVE_FROM_CART',
  payload: { id: productId },
});

type AddToCartAction = {
  type: 'ADD_TO_CART';
  payload: Product;
};

type RemoveFromCartAction = {
  type: 'REMOVE_FROM_CART';
  payload: { id: number };
};
