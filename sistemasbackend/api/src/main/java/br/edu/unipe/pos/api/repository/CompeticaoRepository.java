package br.edu.unipe.pos.api.repository;

import br.edu.unipe.pos.api.model.Competicao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompeticaoRepository extends JpaRepository <Competicao, Integer>{

}
