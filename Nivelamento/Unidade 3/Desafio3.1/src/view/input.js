
const entry = require('prompt-sync')({ sigint: true });

/**
 * @description Classe que apenas recebe os inputs de usuário
 */
class Input { 
    /**
     * @description Metodo para tratar todos os inputs de usuario como string
     * @param {string} String  
     * @returns string digitada
     */
    getStrInput(string) {
        return entry(string);
    }
}

export {Input};