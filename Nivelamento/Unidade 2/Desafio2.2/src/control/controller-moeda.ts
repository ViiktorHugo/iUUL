
import { Moeda } from "../model/moeda";

/**
 * @Author Victor Hugo
 * @description Controlador responsavel por criar uma nova instancia de moeda
 */
class ControllerMoeda {
    
    constructor(){}

    createMoeda(tipo: string, valor: number) {
        return new Moeda(tipo, valor);
    }
}

export {ControllerMoeda};