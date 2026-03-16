import { Observable, Order } from "../dist/type.js";
/**
 * OrderManager es una clase que implementa la interfaz GalacticRegistry
 * Esta clase notifica a los suscriptores cuando se produce un cambio en un pedido.
 * Registra un pedido en el sistema. Si ya existe un pedido con el mismo id
 * Devuelve el pedido correspondiente al id proporcionado, o undefined si no existe.
 * Permite cambiar el estado de un pedido.
 * @class OrderManager
 * @implements {Observable}
 */
export declare class OrderManager implements Observable {
    addOrder(order: Order): void;
    getOrder(id: string): Order | undefined;
}
