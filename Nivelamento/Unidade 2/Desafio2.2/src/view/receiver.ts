
import readlineSync from 'readline-sync';

class Receiver {
    getStrInput (input: string) : string {
        return readlineSync.question(input);
    }

    getNumInput (input: string) : number {
        const initialInput = readlineSync.question(input);
        const finalInput = parseFloat(initialInput);

        return finalInput;
    }
}

export {Receiver};