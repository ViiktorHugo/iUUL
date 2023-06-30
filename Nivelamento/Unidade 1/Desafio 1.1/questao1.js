
// classe do vertice
class Vertice {
    //atributos
    _coordX;
    _coordY;

    //construtor
    constructor(cordx, cordy){
        this._coordX = cordx;
        this._coordY = cordy;
    }


    //metodos
    move (newX, newY) {
        this._coordX = newX;
        this._coordY = newY;
    }


    //getters e setters
    set CoordX(newX) {
        this._coordX = newX;
    }

    get CoordX(){
        return this._coordX;
    }

    set CoordY(newY) {
        this._coordY = newY;
    }

    get CoordY() {
        return this._coordY;
    }
}

// classe utilizada para verificar metodos entre vertices, nada sera armazenado
class ControllerVertices {

    equals(vtxA, vtxB) {
        if (vtxA._coordX === vtxB._coordX && vtxA._coordY === vtxB._coordY) {
            return true;
        } else {
            return false;
        }
    }

    distancia(vtxA, vtxB) {
        return Math.sqrt(((vtxB.CoordX - vtxA.CoordX)**2) + ((vtxB.CoordY - vtxA.CoordY)**2));
    }
}

// testes
let controller = new ControllerVertices();

let vertice1 = new Vertice(2,2);
let vertice2 = new Vertice(-2,-5);
let vertice3 = new Vertice(2,2);


console.log(controller.equals(vertice1, vertice2));
console.log(controller.equals(vertice1, vertice3));
console.log(controller.distancia(vertice1, vertice2));
console.log(controller.distancia(vertice1, vertice3));

vertice1.move(0,0);
vertice2.move(1,0);
vertice3.move(3,0);

console.log(vertice1);
console.log(vertice2);
console.log(vertice3);