export type OrderStatus = "pending" | "confirmed" | "shipped" | "delivered";

export type Order = {
  id: string;
  status: OrderStatus;
  items: string [];
};

export type Observer = {
  update(order: Order): void;
}

export type Observable = {
  suscribe(observer: Observer): void;
  unsuscribe(observer: Observer): void;
  notify(order: Order): void;
}