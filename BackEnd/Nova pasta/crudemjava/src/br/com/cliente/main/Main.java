package br.com.cliente.main;

import br.com.cliente.dao.CadastroDAO;
import br.com.cliente.model.Cadastro;

public class Main {

	public static void main(String[] args) {

		CadastroDAO cadastroDao = new CadastroDAO();
		
		Cadastro cadastro = new Cadastro ();
		
		cadastro.setCpf(753956278);
		cadastro.setNome("Patrick Doe");
		cadastro.setEmail("patrick@email.com");
		cadastro.setSenha(6598);
		cadastro.setTelefone(987546521);
		
		cadastroDao.save(cadastro);
		
	}

}
