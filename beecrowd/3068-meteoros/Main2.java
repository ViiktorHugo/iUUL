/*
 * If you keep receiving time limit in Java, make sure that your solution is using more optimized methods of input and output. 
 * As test cases can be large, if you use Scanner and System.out your solution will receive "Time Limit Exceeded". 
 * Only problems in the Beginner category will accept solutions with those methods.
 * 
 */

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;


 
/**
 * IMPORTANT: 
 *      O nome da classe deve ser "Main" para que a sua solução execute
 *      Class name must be "Main" for your solution to execute
 *      El nombre de la clase debe ser "Main" para que su solución ejecutar
 */
public class Main2 {
 
    public static void main(String[] args) throws IOException {
        InputStreamReader ir = new InputStreamReader(System.in);
        BufferedReader insert = new BufferedReader(ir);

        ArrayList<Fazenda> fazendas = new ArrayList<>();
        String[] meteorsCoords, coords;
        int meteorsAmount;
        

        while (true) {
            coords = insert.readLine().split(" ");
            if (coords[0].equals("0") && coords[1].equals("0") && coords[2].equals("0") && coords[3].equals("0")) {
                break;
            }
            Fazenda fazenda = new Fazenda(coords);
            fazendas.add(fazenda);

            meteorsAmount = Integer.parseInt(insert.readLine());

            for (int i = 0; i <= meteorsAmount -1; i ++) {
                meteorsCoords = insert.readLine().split(" ");
                if(fazenda.verificaSeCaiu(meteorsCoords) == true){
                    fazenda.addFallenMeteors();
                }
            }
        }

        for (Fazenda x : fazendas) {
            System.out.println("Teste " + (fazendas.indexOf(x)+1) + "\n" +x.getFallenMeteors());
        }

        insert.close();
    }

    // objeto fazenda, sera armazenado em um arrayList
    public static class Fazenda {
        int idFazenda;
        int fallenMeteors;
        int coordX1, coordY1, coordX2, coordY2;

        public Fazenda (String[] coords){
            this.coordX1 = Integer.parseInt(coords[0]);
            this.coordY1 = Integer.parseInt(coords[1]);
            this.coordX2 = Integer.parseInt(coords[2]);
            this.coordY2 = Integer.parseInt(coords[3]);

            this.fallenMeteors = 0;
        }

        // verifica se um determinado meteorito, caiu na area da fazenda
        public boolean verificaSeCaiu (String [] coords) {
            int coordX = Integer.parseInt(coords[0]);
            int coordY = Integer.parseInt(coords[1]);

            boolean result = false;

            if (coordX >= coordX1 && coordX <= coordX2) {
                if (coordY <= coordY1 && coordY >= coordY2) {
                    result = true;
                }
            }

            return result;
        }

        public void addFallenMeteors() {
            this.fallenMeteors ++;
        }


        // getters e setters necessarios
        public int getFallenMeteors() {
            return this.fallenMeteors;
        }
    }
 
}
