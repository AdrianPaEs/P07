import { Observer, Order } from "../dist/type.js";
export declare class EmailNotifier implements Observer {
    update(order: Order): void;
}
export declare class InventoryUpdater implements Observer {
    update(order: Order): void;
}
