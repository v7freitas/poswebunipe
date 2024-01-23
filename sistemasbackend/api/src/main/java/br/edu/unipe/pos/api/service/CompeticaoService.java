package br.edu.unipe.pos.api.service;

import br.edu.unipe.pos.api.model.Competicao;
import br.edu.unipe.pos.api.repository.CompeticaoRepository;
import com.zaxxer.hikari.metrics.dropwizard.CodahaleMetricsTrackerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class CompeticaoService {

    @Autowired
    private CompeticaoRepository repository;

    public Competicao cadastrar(Competicao competicao) {
        return repository.save(competicao);
    }

    public List<Competicao> listar() {return repository.findAll();}

    public Competicao alterar(Competicao competicao){
        if(Objects.isNull(competicao.getId())){
            throw new RuntimeException();
        }
        return repository.save(competicao);
    }

    public void deletar(Integer id) { repository.deleteById(id); }

    public Competicao consultarPorId(Integer id){
        return repository.findById(id)
                .orElseThrow(RuntimeException::new);
    }


}


