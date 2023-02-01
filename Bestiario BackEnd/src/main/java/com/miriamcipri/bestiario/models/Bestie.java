package com.miriamcipri.bestiario.models;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="bestie")
public class Bestie {
	
		  @Id
		  @GeneratedValue(strategy = GenerationType.IDENTITY)
		  private Integer id;  
		  private String nome;
		  private String descrizione;
		  private String img;
		  
		  @ManyToOne
		  @JoinColumn(name = "id_categoria")
		  private Categoria categoria;
		  
//		  @OneToMany(cascade =CascadeType.ALL , mappedBy = "category")
//		  private Set<Recipe> recipes;
	
}
