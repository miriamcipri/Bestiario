package com.miriamcipri.bestiario.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.miriamcipri.bestiario.models.Categoria;
import com.miriamcipri.bestiario.repository.CategoriaRepository;


@Service
public class CategoriaService {
	
	@Autowired
	private CategoriaRepository repository;
	
	public List<Categoria> read() {
		return repository.findAll();
	}
	
	public Categoria create(Categoria bestie) {
		return repository.save(bestie);
	}
	
	public void delete(int id) {
		repository.deleteById(id);
	}
	
	public Categoria update (int id, Categoria newCategoria) {
		
		Categoria categoria =repository.findById(id).get();
		categoria.setDescrizione(newCategoria.getDescrizione());
		categoria.setNome_categoria(newCategoria.getNome_categoria());
		return repository.save(categoria);
	}
}
