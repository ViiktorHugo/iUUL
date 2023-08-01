
// TODO => Estudar o uso de interfaces em TypeScript

import { ControllerMoeda } from "../controllers/controller-moeda"

interface InterfaceControllerMoeda {
    createMoeda() {
        moeda: Object = new ControllerMoeda();
    }
}