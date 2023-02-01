package com.miriamcipri.bestiario.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.miriamcipri.bestiario.models.Bestie;
import com.miriamcipri.bestiario.repository.BestieRepository;



@Service
public class BestieService {

	@Autowired
	private BestieRepository repository;
	
	public List<Bestie> read() {
		return repository.findAll();
	}
	
	public Bestie create(Bestie bestie) {
		return repository.save(bestie);
	}
	
	public void delete(int id) {
		repository.deleteById(id);
	}
	
	public Bestie update (int id, Bestie newBestia) {
		Bestie bestia =repository.findById(id).get();
		bestia.setNome(newBestia.getNome());
		bestia.setDescrizione(newBestia.getDescrizione());
		bestia.setCategoria(newBestia.getCategoria());
		bestia.setImg(newBestia.getImg());
		return repository.save(bestia);
	}
}
