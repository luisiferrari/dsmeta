package com.devsuperior.demeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.demeta.entities.Sale;

//Componente do sistema responsável por acessar o DB
public interface SaleRepository extends JpaRepository<Sale, Long>{
	
	

}
