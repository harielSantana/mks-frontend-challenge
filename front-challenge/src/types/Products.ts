export interface CartState {
    cartItems: Product[];
    totalPrice: number;
}

export interface Product {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: number;
    created_at: string;
    updateded_at: string;
}