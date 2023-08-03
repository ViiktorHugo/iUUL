import { Moeda } from "../model/moeda";
import { InterfaceControllerMoeda } from "../interfaces/interface-controller-moeda";

/**
 * @Author Victor Hugo
 * @description Controlador responsavel por criar uma nova instancia de moeda
 */
class ControllerMoeda implements InterfaceControllerMoeda{
    
    createMoeda(tipo : string, valor?: number) : Moeda {
        return new Moeda(tipo, valor);
    }
}

export {ControllerMoeda};