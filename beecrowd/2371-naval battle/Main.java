/*
 * If you keep receiving time limit in Java, make sure that your solution is using more optimized methods of input and output. 
 * As test cases can be large, if you use Scanner and System.out your solution will receive "Time Limit Exceeded". 
 * Only problems in the Beginner category will accept solutions with those methods.
 * 
 */


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
	public static void main (String [] args) throws IOException {
		InputStreamReader in = new InputStreamReader(System.in);
		BufferedReader input = new BufferedReader(in);
		
		String[] battleSize = input.readLine().split(" ");
		Tabuleiro tabuleiro = new Tabuleiro(battleSize);
		
		
		for (int linha = 0; linha < (Integer.parseInt(battleSize[1])); linha++) {
			tabuleiro.populaTabuleiro(input.readLine());
		}
		
		int tiros = Integer.parseInt(input.readLine());
		
		for (int i = 0; i <= tiros-1; i++) {
			String[] coordenadaTiro = input.readLine().split(" ");
		}
		
		
		System.out.println("--------------------------------------");
		tabuleiro.imprimeMatrix();
		input.close();
	}
	
	public static class Tabuleiro {
		String[][] matrix;
		
		public Tabuleiro (String[] size) {
			this.matrix = new String[Integer.parseInt(size[0])][Integer.parseInt(size[1])];
		}
		
		public void populaTabuleiro(String entry) {
			for (int i = 0; i < entry.length(); i ++) {
				this.matrix[i][i] = entry;
			}
		}
		
		
		public void imprimeMatrix() {
			for (String [] linha : this.matrix) {
				System.out.println(Arrays.toString(linha));
			}
		}
		
		public String[][] getMatrix() {
			return this.matrix;
		}
	}
	
	public static class BattleShip {
		private String[] cordenadas;
		private boolean isDestroyed;
		
		public BattleShip(String[] coords) {
			this.isDestroyed = false;
			this.cordenadas = coords;
		}
		
		//getters e setters necessarios
		public void setIsDestroyed(boolean status) {
			this.isDestroyed = status;
		}
		
		public boolean getIsDestroyed() {
			return this.isDestroyed;
		}
		
		public String[] getCoordenadas() {
			return this.cordenadas;
		}
	}
	
	public static class SingleBattleShip extends BattleShip {
		public SingleBattleShip(String[] coords) {
			super(coords);
		}
	}
	
	public static class LargeBattleShip extends BattleShip {
		public LargeBattleShip(String[] coords) {
			super(coords);
		}
	}
}