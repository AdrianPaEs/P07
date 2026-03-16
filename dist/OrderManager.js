"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderManager = void 0;
/**
 * OrderManager es una clase que implementa la interfaz GalacticRegistry
 * Esta clase notifica a los suscriptores cuando se produce un cambio en un pedido.
 * Registra un pedido en el sistema. Si ya existe un pedido con el mismo id
 * Devuelve el pedido correspondiente al id proporcionado, o undefined si no existe.
 * Permite cambiar el estado de un pedido.
 * @class OrderManager
 * @implements {Observable}
 */
class OrderManager {
    addOrder(order) {
        console.log(`El pedido con id {id} ya existe`);
    }
    getOrder(id) {
        return (console.log(`El pedido ${order.id} está en estado ${order.status}`));
    }
}
exports.OrderManager = OrderManager;
