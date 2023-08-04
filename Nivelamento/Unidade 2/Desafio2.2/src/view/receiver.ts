
import readlineSync from 'readline-sync';

/**
 * @Author Victor Hugo
 * @description - Classe que cuida da entrada de dados do usuario
 */
class Receiver {
    /**
     * @description - Recebe a entrada para o tipo das moedas
     * @param input - tipo de moeda
     * @example: 'USD', 'BRL'
     */
    getStrInput (input: string) : string {
        return readlineSync.question(input);
    }

    /**
     * @description - Recebe a entrada para o valor das moedas
     * @param input - valor da moeda
     * @example: 1, 1000, 2050.30
     */
    getNumInput (input: string) : number {
        const initialInput = readlineSync.question(input);
        const finalInput = parseFloat(initialInput);

        return finalInput;
    }
}

export {Receiver};