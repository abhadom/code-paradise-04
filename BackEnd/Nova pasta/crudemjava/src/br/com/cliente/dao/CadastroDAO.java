package br.com.cliente.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;

import br.com.cliente.factory.ConnectionFactory;
import br.com.cliente.model.Cadastro;

public class CadastroDAO {
	
	//crud
	
	public void save(Cadastro cadastro) {
		
		String sql = "INSERT INTO CLIENTE(cpf, nome, email, senha, telefone) VALUES (?, ?, ?, ?, ?)";
		
		Connection conn = null;
		PreparedStatement pstm = null;
		
		try {
			
			//cria uma conexão com o banco de dados
			conn = ConnectionFactory.creatConnectionToMySQL();
			
			//criado prepared statement para executar uma query
			pstm = (PreparedStatement) conn.prepareStatement(sql);
			//adicionar valores esperados
			pstm.setInt(1, cadastro.getCpf());
			pstm.setString(2, cadastro.getNome());
			pstm.setString(3, cadastro.getEmail());
			pstm.setInt (4, cadastro.getSenha());
			pstm.setInt(5, cadastro.getTelefone());
			
			//executar a query
			pstm.execute();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			
			//fechar conexões
			try {
				if (pstm!= null) {
					pstm.close();
				}
				if (conn!= null) {
					conn.close();
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}

}
