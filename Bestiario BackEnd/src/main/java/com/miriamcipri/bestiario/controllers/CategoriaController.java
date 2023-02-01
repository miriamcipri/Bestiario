package com.miriamcipri.bestiario.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.miriamcipri.bestiario.models.Categoria;
import com.miriamcipri.bestiario.services.CategoriaService;

@RestController
@RequestMapping("/api/categoria")
public class CategoriaController {
	@Autowired
	private CategoriaService service;
	
	@GetMapping("")
	@CrossOrigin("*")
	public List<Categoria> index(){
		return service.read();
	}
	
	@PostMapping("")
	@CrossOrigin("*")
	@ResponseStatus(code=HttpStatus.CREATED)
	public Categoria create(@RequestBody Categoria categoria) {
		return service.create(categoria);
	}
	
	@DeleteMapping("/{id}")
	@CrossOrigin(origins ="*")
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	public void delete(@PathVariable int id) {
		 service.delete(id);
	}
	
	@PutMapping("/{id}")
	@CrossOrigin("*")
	public Categoria update(@RequestBody Categoria categoria, @PathVariable int id) {
		return service.update(id, categoria);
	}
}
