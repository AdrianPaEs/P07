"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryUpdater = exports.EmailNotifier = void 0;
class EmailNotifier {
    update(order) {
        console.log(`El pedido con id ${order.id} ha cambiado su estado a '${order.status}'.`);
    }
}
exports.EmailNotifier = EmailNotifier;
class InventoryUpdater {
    update(order) {
        console.log(`Sincronizando inventario para el pedido ${order.id} -> Estado: ${order.status}`);
    }
}
exports.InventoryUpdater = InventoryUpdater;
