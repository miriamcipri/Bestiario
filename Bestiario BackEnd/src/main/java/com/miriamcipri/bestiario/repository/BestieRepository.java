package com.miriamcipri.bestiario.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.miriamcipri.bestiario.models.Bestie;



public interface BestieRepository extends JpaRepository<Bestie, Integer>{
	
}
