package br.com.cliente.factory;

import java.sql.Connection;
import java.sql.DriverManager;

public class ConnectionFactory {

	//nome do usuário do mysql
	private static final String USERNAME = "root";
	
	//senha do banco
	private static final String PASSWORD = "1429PDF31galB@01";
	
	//caminho do banco de dados, porta, nome do banco de dados
	private static final String DATABASE_URL = "jdbc:mysql://localhost:3306/code_paradise";
	
	//conexão com o banco de dados
	public static Connection creatConnectionToMySQL() throws Exception {
		
		//faz com que a classe seja carregada pela jvm
		Class.forName("com.mysql.cj.jdbc.Driver");
		
		//cria conexão com o banco
		Connection connection = DriverManager.getConnection(DATABASE_URL, USERNAME, PASSWORD);
		
		return connection;
	}
	
	public static void main (String[]args) throws Exception {
		
		//recupera conexão com o banco de dados
		Connection con = creatConnectionToMySQL();
		
		//testar se a conexão é nula
		if (con!= null) {
			System.out.println("Conexão obtida com sucesso!");
			con.close();
		}
	}
	
}
