
// TODO => Estudar o uso de interfaces em TypeScript
import { Moeda } from "../model/moeda";

/**
 * @Author Victor Hugo
 * @description Interface para o serviço de moeda (controlador)
 */
interface InterfaceControllerMoeda {
    createMoeda(tipo : string, valor?: number) : Moeda;
}

export {InterfaceControllerMoeda};
