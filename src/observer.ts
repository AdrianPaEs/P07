import { Observer, Order } from "../dist/type.js";

export class EmailNotifier implements Observer{
  public update(order: Order): void {
    console.log(`El pedido con id ${order.id} ha cambiado su estado a '${order.status}'.`);
  }
}

export class InventoryUpdater implements Observer{
  public update(order: Order): void {
    console.log(`Sincronizando inventario para el pedido ${order.id} -> Estado: ${order.status}`);
  }
}