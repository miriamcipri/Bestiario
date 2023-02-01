package com.miriamcipri.bestiario.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.miriamcipri.bestiario.models.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Integer> {

}
