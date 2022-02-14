package db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class MySqlConnection {
	
	private static final String url = "jdbc:mysql://localhost:3306/java_crud";
	private static final String user = "Ademira";
	private static final String password = "FixaT3$1108752";
	
	public static Connection createConnection() {
		
		try {
			
			Class.forName("com.mysql.cj.jdbc.Driver");
			System.out.println("Driver found");
			
		} catch(ClassNotFoundException e) {
			
			System.out.println("Driver not found. " + e.getMessage());
			
		}
		
		try {
			
		Connection connection = DriverManager.getConnection(url, user, password);
		System.out.println("Connected to database");
		return connection;
		
	} catch (SQLException e) {
		
		System.out.println("Not connected to database. " + e.getMessage());
		return null;
	}

}
	}
