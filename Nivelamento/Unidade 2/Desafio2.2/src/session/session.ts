

import { ControllerMoeda } from "../control/controller-moeda";
import { InterfaceControllerMoeda } from "../interfaces/interface-controller-moeda";

/**
 * @Author Victor Hugo
 * @description inicia uma sessão, do controller moeda.
 */
const sessionMoeda: InterfaceControllerMoeda = new ControllerMoeda();

export {sessionMoeda};